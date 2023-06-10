export default function () {
  return (
    <div className="bg-black/10 fixed w-full">
      <div className="text-white flex flex-row justify-center gap-10 p-2  max-w-7xl mx-auto">
        <div className="text-3xl font-medium">Welcome</div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-end gap-5">
            <div className=" capitalize text-xl hover:text-teal-100  hover:shadow-sm hover:shadow-teal-200 p-2 rounded-md">
              experience
            </div>
            <div className=" capitalize text-xl hover:text-teal-100  hover:shadow-sm hover:shadow-teal-200 p-2 rounded-md">
              education
            </div>
            <div className=" capitalize text-xl hover:text-teal-100  hover:shadow-sm hover:shadow-teal-200 p-2 rounded-md">
              projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
