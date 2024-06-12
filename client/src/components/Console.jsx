import React, { useRef, useEffect } from "react";

export const Console = ({ savedValue }) => {

  return (
    <div className="flex relative flex-col bg-gray-700 h-[460px] w-full rounded-3xl text-white">
      <div className="flex flex-row gap-x-3 items-start justify-start bg-slate-400 h-10 rounded-t-3xl p-4">
        <div className="flex w-3 h-3 rounded-full bg-red-600"></div>
        <div className="flex w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="flex w-3 h-3 rounded-full bg-green-600"></div>
      </div>
      <p className="h-auto overflow-y-scroll ml-4 no-scrollbar">
        {savedValue}
      </p>
    </div>
  );
};