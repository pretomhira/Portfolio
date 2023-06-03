import { getUserInfoData } from "@/app/api/data";

type UserInfo = {
  name: string;
  title: string;
  about: string;
};

export default async function User() {
  const userInfo: UserInfo = await getUserInfoData();
  console.log(userInfo);
  return (
    <div className="card-1 group">
      <div className="flex flex-col gap-2">
        <div className="title-1">{userInfo.name}</div>
        <div className="title-3">{userInfo.title}</div>
        <div className="about-title">{userInfo.about}</div>
      </div>
    </div>
  );
}
