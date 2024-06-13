import React from "react";


export const Status = {
    OFFLINE: 'offline',
    ONLINE: 'online',
}
export const StatsProfile = ({ userName, timer,status }) => {
  return (
    <div className="flex flex-row justify-between items-center bg-slate-400 rounded-2xl px-10 py-2 w-[800px]">
        <div className={'flex flex-row gap-x-5 items-center justify-center'}>
            <div className={'flex flex-col relative w-16 h-16 items-center justify-center'}>
                <img className="w-12 h-12" src={require("../assets/user_icon.png")} alt="" srcset=""/>
                <div className={`absolute w-3 h-3  rounded-full bottom-2 right-3 ${status === Status.ONLINE ? 'bg-green-400': 'bg-red-400' }`}></div>
            </div>
            <p>{userName}</p>
        </div>
        <p>{timer}</p>
    </div>
  );
};