"use client";

// Hooks
import { useEffect, useState, useRef } from "react";

// Components
import TopTags from "./TopTags";
import Image from "next/image";
import profilePicture from "../../aseets/profile-picture.png";
import react from "../../aseets/react.png";
import redux from "../../aseets/redux.png";
import tailwind from "../../aseets/tailwind.png";
import docker from "../../aseets/docker.png";

// DataTypes
import { UserPropsInfo } from "@/app/api/dataTypes";

export default function User({ userInfo }: UserPropsInfo) {
  return (
    <div className="h-screen flex flex-col sm:flex-row cursor-default">
      <div className="flex-auto sm:flex-1 flex flex-col justify-center">
        <div className="card-1 group">
          <div className="flex flex-col gap-2 sm:gap-4">
            <div className="title-1">{userInfo.name}</div>
            <div className="title-3">{userInfo.title}</div>
            <TopTags />
            <div className="about-title">{userInfo.about}</div>
          </div>
        </div>
      </div>
      <div className="flex-auto sm:flex-1 flex flex-col justify-center">
        <div className=" flex flex-row justify-center">
          <div className="relative bg-cyan-700/5 p-4 rounded-full hover:shadow-lg hover:shadow-teal-400 duration-700">
            <Image
              className="rounded-full bg-gradient-to-tr from-cyan-950 to-black w-40 h-40 sm:w-60 sm:h-60 m-20"
              src={profilePicture}
              alt="Profile Picture"
              priority={true}
            ></Image>

            <div className="group">
              <div>
                <div className="h-full w-full rounded-full  absolute top-0 left-0 flex flex-row justify-center animate-mySpin group-hover:pause p-2 ">
                  <div className="flex flex-col justify-start">
                    <Image
                      className="rounded-full bg-gradient-to-tr from-cyan-950 to-black w-16 h-16 sm:w-24 sm:h-24 p-2 animate-myReverseSpin group-hover:shadow-sm group-hover:shadow-teal-500 duaration-1000 group-hover:pause"
                      src={react}
                      alt="react"
                      priority={true}
                    ></Image>
                  </div>
                </div>
                <div className="h-full w-full  absolute top-0 left-0 flex flex-row justify-end animate-mySpin group-hover:pause p-2">
                  <div className="flex flex-col justify-center">
                    <Image
                      className="rounded-full bg-gradient-to-tr from-cyan-950 to-black w-16 h-16 sm:w-24 sm:h-24 p-2 animate-myReverseSpin group-hover:shadow-sm group-hover:shadow-teal-500 duaration-1000 group-hover:pause"
                      src={redux}
                      alt="redux"
                      priority={true}
                    ></Image>
                  </div>
                </div>
                <div className="h-full w-full  absolute top-0 left-0 flex flex-row justify-center animate-mySpin group-hover:pause p-2">
                  <div className=" flex flex-col justify-end">
                    <Image
                      className="rounded-full bg-gradient-to-tr from-cyan-950 to-black w-16 h-16 sm:w-24 sm:h-24 p-2 animate-myReverseSpin group-hover:shadow-sm group-hover:shadow-teal-500 duaration-1000 group-hover:pause"
                      src={tailwind}
                      alt="tailwind"
                      priority={true}
                    ></Image>
                  </div>
                </div>
                <div className="h-full w-full  absolute top-0 left-0 flex flex-row justify-start animate-mySpin group-hover:pause p-2">
                  <div className=" flex flex-col justify-center">
                    <Image
                      className="rounded-full bg-gradient-to-tr from-cyan-950 to-black w-16 h-16 sm:w-24 sm:h-24 p-2 animate-myReverseSpin group-hover:shadow-sm group-hover:shadow-teal-500 duaration-1000 group-hover:pause"
                      src={docker}
                      alt="docker"
                      priority={true}
                    ></Image>
                  </div>
                </div>
              </div>
              <div className="h-full w-full absolute top-0 left-0  rounded-full p-6 -z-10">
                <div className="h-full w-full border border-teal-800 group-hover:border-teal-400 duration-1000 rounded-full"></div>
              </div>
              <div className="h-full w-full absolute top-0 left-0  rounded-full p-16 -z-10">
                <div className="h-full w-full border border-teal-800 group-hover:border-teal-400 duration-1000 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
