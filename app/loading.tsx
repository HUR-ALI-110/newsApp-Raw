import React from "react";

function loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full border-4 border-t-4 border-gray-300 animate-spin mb-4"></div>
        <p className="text-gray-700">Loading....</p>
    </div>
</div>
  );
}

export default loading;
