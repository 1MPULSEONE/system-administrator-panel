import React, { useState } from "react";
import { DropDown } from "./DropDown";
import { ItemButton } from "./ItemButton";

export const CommandList = () => {
  const [popups, setPopups] = useState({
    ping: false,
    trace: false,
    netstat: false,
  });

  const items = [
    { label: "Ping", key: "ping", example: 'Нужно ввести команду "ping адрес", например "ping yandex.ru" или "ping 77.88.8.8"' },
    { label: "Trace", key: "trace", example: 'Введите команду: traceroute имя_сайта (домен) или traceroute IP_сервера.' },
    { label: "Netstat", key: "netstat", example: 'netstat [-a] [-b] [-e] [-n] [-o] [-p <Protocol>] [-r] [-s] [<interval>]' },
  ];

  const togglePopup = (key) => {
    setPopups({ ...popups, [key]: !popups[key] });
  };

  return (
    <div className="flex flex-col items-center w-full h-[76.39%] rounded-2xl justify-between">
      <div className="bg-slate-400 w-full h-10 rounded-t-3xl flex justify-center items-center">
        Command list
      </div>
      <div className="bg-gray-700 h-full w-full rounded-b-3xl overflow-y-scroll no-scrollbar pt-4">
        <div className="text-white flex flex-col gap-y-10 w-full">
          {items.map((item) => (
            <div key={item.key} className="flex flex-col w-full">
              <ItemButton togglePopup={() => togglePopup(item.key)} isActive={popups[item.key]} text={item.label} />
              {popups[item.key] && <DropDown example={item.example} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
