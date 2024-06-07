import React from "react";

export const StatsProfile = ({ userName, timer }) => {
  return (
    <div className="flex flex-row justify-center items-center">
    <div className="h-16 w-3/6 bg-slate-400 flex items-center justify-center rounded-2xl">
      <div className="flex flex-row gap-x-12 justify-center items-center">
        <img className="w-12 h-12" src="user_blank.png" alt="" srcset="" />
        <p>{userName}</p>
        <p>{timer}</p>
      </div>
    </div>
    </div>
  );
};