import { getUserInfoData } from "@/app/api/data";
import Image from "next/image";
import profilePicture from "../../aseets/profile-picture.png";
import react from "../../aseets/react.png";
import redux from "../../aseets/redux.png";
import tailwind from "../../aseets/tailwind.png";
import docker from "../../aseets/docker.png";

type UserInfo = {
  name: string;
  title: string;
  about: string;
};

export default async function User() {
  const userInfo: UserInfo = await getUserInfoData();
  return (
    <div className="flex flex-row">
      <div className="flex-1 flex flex-col justify-center">
        <div className=" card-1 group">
          <div className="flex flex-col gap-2">
            <div className="title-1">{userInfo.name}</div>
            <div className="title-3">{userInfo.title}</div>
            <div className="about-title">{userInfo.about}</div>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden md:flex flex-row justify-center m-10 ">
        <div className="relative bg-cyan-700/5 p-10 rounded-full hover:shadow-lg hover:shadow-teal-400 duration-700">
          <Image
            className="rounded-full bg-gradient-to-tr from-cyan-950 to-black w-60 h-60 m-20"
            src={profilePicture}
            alt="Profile Picture"
          ></Image>

          <div className="group">
            <div>
              <div className="h-full w-full rounded-full  absolute top-0 left-0 flex flex-row justify-center animate-mySpin group-hover:pause p-2 ">
                <div className="flex flex-col justify-start">
                  <Image
                    className="rounded-full bg-gradient-to-tr from-cyan-950 to-black w-24 h-24 p-2 animate-myReverseSpin group-hover:shadow-sm group-hover:shadow-teal-500 duaration-1000 group-hover:pause"
                    src={react}
                    alt="react"
                  ></Image>
                </div>
              </div>
              <div className="h-full w-full  absolute top-0 left-0 flex flex-row justify-end animate-mySpin group-hover:pause p-2">
                <div className="flex flex-col justify-center">
                  <Image
                    className="rounded-full bg-gradient-to-tr from-cyan-950 to-black w-24 h-24 p-2 animate-myReverseSpin group-hover:shadow-sm group-hover:shadow-teal-500 duaration-1000 group-hover:pause"
                    src={redux}
                    alt="redux"
                  ></Image>
                </div>
              </div>
              <div className="h-full w-full  absolute top-0 left-0 flex flex-row justify-center animate-mySpin group-hover:pause p-2">
                <div className=" flex flex-col justify-end">
                  <Image
                    className="rounded-full bg-gradient-to-tr from-cyan-950 to-black w-24 h-24 p-2 animate-myReverseSpin group-hover:shadow-sm group-hover:shadow-teal-500 duaration-1000 group-hover:pause"
                    src={tailwind}
                    alt="tailwind"
                  ></Image>
                </div>
              </div>
              <div className="h-full w-full  absolute top-0 left-0 flex flex-row justify-start animate-mySpin group-hover:pause p-2">
                <div className=" flex flex-col justify-center">
                  <Image
                    className="rounded-full bg-gradient-to-tr from-cyan-950 to-black w-24 h-24 p-2 animate-myReverseSpin group-hover:shadow-sm group-hover:shadow-teal-500 duaration-1000 group-hover:pause"
                    src={docker}
                    alt="docker"
                  ></Image>
                </div>
              </div>
            </div>
            <div className="h-full w-full absolute top-0 left-0  rounded-full p-10 -z-10">
              <div className="h-full w-full border border-teal-800 group-hover:border-teal-400 duration-1000 rounded-full"></div>
            </div>
            <div className="h-full w-full absolute top-0 left-0  rounded-full p-24 -z-10">
              <div className="h-full w-full border border-teal-800 group-hover:border-teal-400 duration-1000 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
