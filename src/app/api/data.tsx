export async function getIdentityInfoData() {
  const url: any = process.env.REACT_APP_IDENTITY_INFO_URL;

  const res: any = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
