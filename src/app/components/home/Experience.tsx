export default function Experience() {
  return (
    <div id="experience" className="pt-0 sm:pt-10">
      <div className="card-1 group !mt-16 !w-auto">
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
          <div className="flex-1">
            <div className="flex flex-col gap-3">
              <div className="title-2">Work Experience</div>
              <div className="flex flex-col gap-2">
                <div className="text-teal-600 group-hover:text-teal-300  duration-700">
                  Mulytic Energy Solutions
                </div>
                <div className="title-4 !whitespace-normal !w-auto">
                  01.06.22 - Present
                </div>
                <div className="title-4 !whitespace-normal !w-auto">
                  Software Engineer - Frontend
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="flex flex-col gap-2">
                  <div className="text-teal-600 group-hover:text-teal-300  duration-700">
                    Teleaus
                  </div>
                  <div className="title-4 !whitespace-normal !w-auto">
                    01.02.22 - 01.06.22
                  </div>
                  <div className="title-4 !whitespace-normal !w-auto">
                    Frontend Developer
                  </div>
                </div>
                {/* <div className="flex flex-col justify-center">
                <div className="h-1 w-52 bg-cyan-300"></div>
              </div> */}
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-teal-600 group-hover:text-teal-300  duration-700">
                  East west Media Group LTD.
                </div>
                <div className="title-4 !whitespace-normal !w-auto">
                  01.12.2020 - 01.01.2022
                </div>
                <div className="title-4 !whitespace-normal !w-auto">
                  Web Developer
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:block w-1 sm:w-2 bg-teal-500 rounded-md my-32 "></div>
          <div>
            <div className="title-2">Education</div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <div className="text-teal-600 group-hover:text-teal-300  duration-700">
                  FAU Erlangen-Nürnberg
                </div>
                <div className="title-4 !whitespace-normal !w-auto">
                  01.10.23 - Present
                </div>
                <div className="title-4 !whitespace-normal !w-auto">
                  Data Science (Online )
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-teal-600 group-hover:text-teal-300  duration-700">
                  North South University
                </div>
                <div className="title-4 !whitespace-normal !w-auto">
                  01.01.2015 - 01.01.2020
                </div>
                <div className="title-4 !whitespace-normal !w-auto">
                  Computer Science and Engineering
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
