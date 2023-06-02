import { getIdentityInfoData } from "@/app/api/data";

type Identity = {
  id: string;
  key: string;
  value: string;
};

type IdentityInfo = {
  name: "string";
  title: "string";
  identity: [Identity];
};

export default async function Identity() {
  const identityInfo: IdentityInfo = await getIdentityInfoData();

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="user-name">{identityInfo.name}</div>
          <div className="user-title">{identityInfo.title}</div>
        </div>

        <div className="flex flex-col gap-2">
          {identityInfo.identity.map((identity: Identity) => (
            <div key={identity.id} className="flex flex-row gap-3">
              <div className="indentity-key">{identity.key}</div>
              <div className="secondary-color">:</div>
              <div className="indentity-value">{identity.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
