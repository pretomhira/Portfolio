import { getIdentityInfoData } from "@/app/api/data";
import moment from "moment";

type Identity = {
  id: string;
  key: string;
  value: string;
};

type IdentityInfo = {
  identity: [Identity];
};

const age = (date: string): string => {
  let years = moment().diff(date, "years");
  let months = Math.ceil(
    (moment().diff(date, "months") / 12 - moment().diff(date, "years")) * 10
  );
  return `${years} years ${months} months`;
};

export default async function Identity() {
  const identityInfo: IdentityInfo = await getIdentityInfoData();

  return (
    <div className="card-1 group">
      <div className="flex flex-col gap-5">
        <div className="title-2">Identity</div>
        <div className="flex flex-col gap-2">
          {identityInfo.identity.map((identity: Identity) => (
            <div key={identity.id} className="flex flex-col sm:flex-row gap-3">
              <div className="title-4">{identity.key}</div>
              <div className="secondary-color hidden sm:block">-</div>
              {identity.key === "age" ? (
                <div className="title-5">{age(identity.value)}</div>
              ) : (
                <div className="title-5">{identity.value}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
