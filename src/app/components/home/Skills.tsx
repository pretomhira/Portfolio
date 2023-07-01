"use client";

import { useRef, useEffect } from "react";

// DataTypes
import { SkillPropsInfo, SkillDetail, Level } from "@/app/api/dataTypes";

// Functions
const levelValue: Function = (level: Level) => {
  if (level === "expart") {
    return "w-full";
  }
  if (level === "proficient") {
    return "w-[85%]";
  }
  if (level === "competent") {
    return "w-[75%]";
  }
};

export default function Skills({ skillInfo }: SkillPropsInfo): JSX.Element {
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log("entry", entry);
    });
    observer.observe(myRef.current);
  });
  console.log(myRef);
  return (
    <div className="card-1 group">
      <div className="flex flex-col gap-5">
        <div className="title-2">Skills</div>
        <div className="flex flex-col gap-5">
          {skillInfo.map((skill: SkillDetail) => (
            <div
              key={skill.id}
              className="flex flex-col sm:flex-col gap-3 border border-teal-800 m-1 p-3 rounded-md"
              ref={myRef}
            >
              <div className="title-4 !w-72">{skill.key}</div>
              <div className="cursor-copy flex flex-col gap-2">
                {skill.level.map((level) => (
                  <div className="flex flex-col gap-2">
                    <div
                      className="text-teal-600 group-hover:text-teal-300  duration-700"
                      key={level.id}
                    >
                      {level.key}
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="relative w-full">
                        <div className="h-3 bg-teal-800 max-w-md w-screen rounded-md"></div>
                        <div
                          className={`justify-end absolute top-0 left-0 h-3 bg-teal-300 group-hover:bg-teal-100 duration-700 ${levelValue(
                            level.key
                          )} rounded-md`}
                        >
                          <div className="relative w-full h-full">
                            <div className="absolute -top-1 right-0 h-5 w-5  bg-cyan-100 rounded-full"></div>
                            <div className="absolute -top-1 right-0 h-5 w-5  bg-black/0 rounded-full flex flex-col justify-center">
                              <div className="flex flex-row justify-center">
                                <div className="h-3 w-3 bg-teal-300 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="title-5  flex flex-row gap-2">
                        {level.value.map((value) => (
                          <div
                            className="bg-teal-100/5 py-1 px-2  rounded-md"
                            key={value.id}
                          >
                            {value.skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
