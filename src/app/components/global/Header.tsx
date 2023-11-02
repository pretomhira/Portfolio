"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function () {
  const pathname = usePathname();
  return (
    <div className="bg-black/10 fixed w-full">
      <div className="text-white flex flex-row justify-center gap-10 p-2  max-w-7xl mx-auto">
        <Link href="/" className="text-3xl font-medium">
          Welcome
        </Link>
        <div className="flex flex-col justify-center">
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
        </div>
      </div>
    </div>
  );
}
