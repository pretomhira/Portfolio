import Link from "next/link";
import Image from "next/image";

import chargeAi from "../../aseets/chargeAi.gif";
import chargeAiApp from "../../aseets/chargeAiapp.gif";
import teleaus from "../../aseets/teleaus.gif";
import genofax from "../../aseets/genofax.gif";
import talenttorrent from "../../aseets/talenttorrent.gif";

export default function Project() {
  return (
    <div id="project" className="pt-0 sm:pt-10">
      <div className="card-1 group">
        <div className="flex flex-col gap-5 w-full max-h-[30rem] overflow-y-auto">
          <div className="title-2">Projects</div>
          <div className="flex flex-row sm:flex-col gap-5 max-h-[30rem] overflow-auto">
            <div className="flex flex-col sm:flex-col gap-3 border border-teal-800 m-1 p-3 rounded-md">
              <div className="text-teal-600 group-hover:text-teal-300  duration-700">
                ChargeAi Web
              </div>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 ">
                <div className="flex-1">
                  <Image
                    width={500}
                    height={300}
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3JjeTYxaTM4eGs2cmZ1a3AxdTBmdGhka3lhN2EzY3AyYm16MGIxdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZPPhY6Q2f3ve36sQW8/giphy.gif"
                    alt="chargeAi"
                    className="w-[100vw] h-auto object-cover rounded-md"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between text-orange-400 font-thin text-xs !w-72 !whitespace-normal h-44 overflow-hidden overflow-y-auto">
                  <div className="max-h-32 sm:max-h-auto overflow-y-auto ">
                    <ul className="list-disc list-inside overflow-auto space-y-3">
                      <li>
                        Develop Charge Ai web app for Clients and Charge Point
                        Operators.
                      </li>
                      <li>
                        Implement a Remote Start/Stop Charging system, Filtering
                        Data.
                      </li>
                      <li>
                        Visualize cost savings, Energy consumption, CO2 savings.
                      </li>
                      <li>
                        Integrated Map with real-time charging station traffic
                        status.
                      </li>
                    </ul>
                  </div>
                  {/* <div className="title-4">...</div> */}
                  <div className="flex flex-row gap-3 text-orange-600 italic py-2">
                    <div>Under Developed</div>
                    {/* <div className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-col gap-3 border border-teal-800 m-1 p-3 rounded-md">
              <div className="text-teal-600 group-hover:text-teal-300  duration-700">
                ChargeAi IOS/Android
              </div>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 ">
                <div className="flex-1">
                  <Image
                    width={500}
                    height={300}
                    src="https://media.giphy.com/media/SHF0IWJAScCkwRAJJt/giphy-downsized-large.gif"
                    alt="chargeAi"
                    className="w-[100vw] h-auto object-cover rounded-md"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between text-orange-400 font-thin text-xs !w-72 !whitespace-normal h-44 overflow-hidden overflow-y-auto">
                  <div className="max-h-32 sm:max-h-auto overflow-y-auto ">
                    <ul className="list-disc list-inside overflow-auto space-y-3">
                      <li>
                        Build ChargeAI Mobile applications with React Native and
                        Flutter.
                      </li>
                      <li>Converted React Native to Flutter.</li>
                      <li>
                        Integrate Multiple graphs and Map Services with Mapboxi.
                      </li>
                      <li>
                        Experienced in releasing Android applications for
                        internal testing in the Google Play Store.
                      </li>
                    </ul>
                  </div>
                  {/* <div className="title-4">...</div> */}
                  <div className="flex flex-row gap-3 text-orange-600 italic py-2">
                    <div>Under Developed</div>
                    {/* <div className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-col gap-3 border border-teal-800 m-1 p-3 rounded-md">
              <div className="text-teal-600 group-hover:text-teal-300  duration-700">
                Teleasus
              </div>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 ">
                <div className="flex-1">
                  <Image
                    width={500}
                    height={300}
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2V5d21ncDc4bjlndDB5NGVmemJhanFlY2Uzd2hzY2ZmbmM3aDlleiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ynbv6PQhY27AIGy5o5/giphy-downsized-large.gif"
                    alt="teleaus"
                    className="w-[100vw] h-auto object-cover rounded-md"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between text-orange-400 font-thin text-xs !w-72 !whitespace-normal h-44 overflow-hidden overflow-y-auto">
                  <div className="max-h-32 sm:max-h-auto overflow-y-auto ">
                    <ul className="list-disc list-inside overflow-auto space-y-3">
                      <li>
                        Develop the company's new portfolio web application
                        frontend from scratch.
                      </li>
                      <li>Integrated payment method.</li>
                      <li>
                        Implement pixel-perfect dynamic UI as a static design.
                      </li>
                    </ul>
                  </div>
                  {/* <div className="title-4">...</div> */}
                  <div className="flex flex-row gap-3 text-orange-600 italic py-2">
                    <div>Live Preview</div>
                    <Link href={"https://www.genofax.com/</div>"}>
                      <div className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-col gap-3 border border-teal-800 m-1 p-3 rounded-md">
              <div className="text-teal-600 group-hover:text-teal-300  duration-700">
                Genofax
              </div>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 ">
                <div className="flex-1">
                  <Image
                    width={500}
                    height={300}
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzEyYnBnMGN0NWI2aGxnNDFtYzFsYThoZTdvcjk2a3phdHhka3pqdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LKX476ZTnQ6zMjrkU6/giphy-downsized-large.gif"
                    alt="genofax"
                    className="w-[100vw] h-auto object-cover rounded-md"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between text-orange-400 font-thin text-xs !w-72 !whitespace-normal h-44 overflow-hidden overflow-y-auto">
                  <div className="max-h-32 sm:max-h-auto overflow-y-auto ">
                    <ul className="list-disc list-inside overflow-auto space-y-3">
                      <li>
                        Review Existing code and Update existing web
                        applications with new designs.
                      </li>
                      <li>
                        Update outdated library and optimize the application.
                      </li>
                    </ul>
                  </div>
                  {/* <div className="title-4">...</div> */}
                  <div className="flex flex-row gap-3 text-orange-600 italic py-2">
                    <div>Live Preview</div>
                    <Link href={"https://www.genofax.com/</div>"}>
                      <div className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-col gap-3 border border-teal-800 m-1 p-3 rounded-md">
              <div className="text-teal-600 group-hover:text-teal-300  duration-700">
                Talent Torrent
              </div>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 ">
                <div className="flex-1">
                  <Image
                    width={500}
                    height={300}
                    src={talenttorrent}
                    alt="talenttorrent"
                    className="w-[100vw] h-auto object-cover rounded-md"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between text-orange-400 font-thin text-xs !w-72 !whitespace-normal h-44 overflow-hidden overflow-y-auto">
                  <div className="max-h-32 sm:max-h-auto overflow-y-auto ">
                    <ul className="list-disc list-inside overflow-auto space-y-3">
                      <li>Implemented a new design for job sites.</li>
                      <li>
                        Build an optimized search function with multiple
                        filters.
                      </li>
                    </ul>
                  </div>
                  {/* <div className="title-4">...</div> */}
                  <div className="flex flex-row gap-3 text-orange-600 italic py-2">
                    <div>Live Preview</div>
                    <Link href={"https://www.genofax.com/</div>"}>
                      <div className="cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
