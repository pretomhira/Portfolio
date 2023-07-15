import moment from "moment";

// DataType
import { Identity, IdentityInfo, IdentityPropsInfo } from "@/app/api/dataTypes";

// Functions
const age = (date: string): string => {
  let years = moment().diff(date, "years");
  let months = Math.ceil(
    (moment().diff(date, "months") / 12 - moment().diff(date, "years")) * 10
  );
  return `${years} years ${months} months`;
};

export default function Identity({
  identityInfo,
}: IdentityPropsInfo): JSX.Element {
  return (
    <div className="card-1 group">
      <div className="flex flex-col gap-5">
        <div className="title-2">Identity</div>
        <div className="flex flex-col gap-2">
          {identityInfo.map((identity: Identity) => (
            <div key={identity.id} className="flex flex-col sm:flex-row gap-3">
              <div className="title-4">{identity.key}</div>
              <div className="secondary-color hidden sm:block">-</div>
              {/* {identity.key === "age" ? (
                <div className="title-5">{age(identity.value)}</div>
              ) : (
                <div className="title-5">{identity.value}</div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
