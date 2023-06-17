export default function TopTags() {
  return (
    <div className="flex flex-row gap-5">
      <div className="p-2 font-semibold hover:shadow-md hover:shadow-gray-800  bg-yellow-500 rounded-md">
        JavaScript
      </div>
      <div className="p-2 font-semibold hover:shadow-md hover:shadow-gray-800  bg-blue-500 text-white rounded-md">
        TypeScript
      </div>
      <div className="p-2 font-semibold hover:shadow-md hover:shadow-gray-800  bg-blue-950 text-blue-300 rounded-md ">
        ReactJs
      </div>
      <div className="p-2 font-semibold hover:shadow-md hover:shadow-gray-800  bg-gray-700 text-blue-400 rounded-md ">
        ReactNative
      </div>
    </div>
  );
}
