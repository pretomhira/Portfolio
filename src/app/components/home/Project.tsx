import Link from "next/link";

export default function Project() {
  return (
    <div className="card-1 group" id="project">
      <div className="flex flex-col gap-5 w-full max-h-[30rem] overflow-y-auto">
        <div className="title-2">Projects</div>
        <div className="flex flex-col gap-5 max-h-[30rem] overflow-y-auto">
          <div className="flex flex-col sm:flex-col gap-3 border border-teal-800 m-1 p-3 rounded-md">
            <div className="text-teal-600 group-hover:text-teal-300  duration-700">
              ChargeAi
            </div>
            <div className="flex flex-row gap-3 ">
              <div className="flex-1">
                <img
                  src="https://loremflickr.com/320/240"
                  alt=""
                  className="w-[100vw] h-auto object-cover rounded-md"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between title-4 !w-72 !whitespace-normal h-52 overflow-hidden">
                <div className="">
                  I am currently working for ChargeAi , building its user
                  interface for Web as well as Mobile applications.
                </div>
                {/* <div className="title-4">...</div> */}
                <div className="flex flex-row gap-3">
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
              Genofax
            </div>
            <div className="flex flex-row gap-3 ">
              <div className="flex-1">
                <img
                  src="https://loremflickr.com/320/240"
                  alt=""
                  className="w-[100vw] h-auto object-cover rounded-md"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between title-4 !w-72 !whitespace-normal h-52 overflow-hidden">
                <div className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia corrupti sed placeat voluptate exercitationem quas
                  nisi.
                </div>
                {/* <div className="title-4">...</div> */}
                <div className="flex flex-row gap-3">
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
              Project One
            </div>
            <div className="flex flex-row gap-3 ">
              <div className="flex-1">
                <img
                  src="https://loremflickr.com/320/240"
                  alt=""
                  className="w-[100vw] h-auto object-cover rounded-md"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between title-4 !w-72 !whitespace-normal h-52 overflow-hidden">
                <div className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia corrupti sed placeat voluptate exercitationem quas
                  nisi.
                </div>
                {/* <div className="title-4">...</div> */}
                <div className="flex flex-row gap-3">
                  <div>Live Preview</div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
