"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import github from "../../aseets/github.svg";
import linkedIn from "../../aseets/linkedin.svg";

export default function () {
  const pathname = usePathname();
  return (
    <div className="bg-black/10 fixed w-screen z-50">
      <div className="text-white flex flex-row justify-center gap-10 p-2  max-w-7xl mx-auto">
        <Link href="/" className="text-3xl font-medium">
          Welcome
        </Link>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row gap-4">
            <div className="hidden  sm:flex flex-row justify-end gap-5">
              <Link
                href="#experience"
                className={` capitalize text-xl shadow-md hover:shadow-teal-300 hover:text-teal-200 p-2 rounded-md duration-700 ${
                  pathname.endsWith("/experience") && "shadow-cyan-700"
                }`}
              >
                experience
              </Link>
              <Link
                href="#experience"
                className={` capitalize text-xl shadow-md hover:shadow-teal-300 hover:text-teal-200 p-2 rounded-md duration-700 ${
                  pathname.endsWith("/education") && "shadow-cyan-700"
                }`}
              >
                education
              </Link>
              <Link
                href="#project"
                className={` capitalize text-xl shadow-md hover:shadow-teal-300 hover:text-teal-200 p-2 rounded-md duration-700 ${
                  pathname.endsWith("/project") && "shadow-cyan-700"
                }`}
              >
                project
              </Link>
              <Link
                href="#contact"
                className={` capitalize text-xl shadow-md hover:shadow-teal-300 hover:text-teal-200 p-2 rounded-md duration-700 ${
                  pathname.endsWith("/project") && "shadow-cyan-700"
                }`}
              >
                Contact
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex flex-row gap-5 ">
                <Link href="https://github.com/pretomhira">
                  <Image
                    src={github}
                    alt="github"
                    className="w-5 sm:w-7 bg-white  hover:shadow-md  hover:shadow-cyan-200 shadow-none rounded-full p-1"
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/pretom-das-28833818b/">
                  <Image
                    src={linkedIn}
                    alt="linkedIn"
                    className="w-5 sm:w-6 bg-white  hover:shadow-md  hover:shadow-cyan-200 shadow-none rounded-md p-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
