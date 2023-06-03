const host: any = process.env.REACT_APP_HOST_URL;
const userInfoApi: any = process.env.REACT_APP_USER_INFO_API;
const identityInfoApi: any = process.env.REACT_APP_IDENTITY_INFO_API;
const contactInfoApi: any = process.env.REACT_APP_CONTACT_INFO_API;

export async function getUserInfoData() {
  const url: any = `${host}${userInfoApi}`;

  const res: any = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getIdentityInfoData() {
  const url: any = `${host}${identityInfoApi}`;

  const res: any = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getContactInfoData() {
  const url: any = `${host}${contactInfoApi}`;

  const res: any = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
