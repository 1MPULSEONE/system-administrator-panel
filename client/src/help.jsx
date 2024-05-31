import React, { useState } from "react";
import {Popup} from "./Popup";
import {ButtonComponent} from "./ButtonComponent";

export const Help = () => {
  const [pingPopupVisible, setPingPopupVisible] = useState(false);
  const [tracePopupVisible, setTracePopupVisible] = useState(false);
  const [netstatPopupVisible, setNetstatPopupVisible] = useState(false);

  return (
    <div className="flex flex-col items-center w-full h-full rounded-2xl">
      <div className="bg-slate-400 w-full h-10 rounded-t-2xl flex justify-center items-center">
        Сommand list
      </div>
    <div className="bg-gray-700 h-full w-full rounded-b-2xl overflow-y-scroll no-scrollbar">
      
      <div className="text-white">
        <div>
          <ButtonComponent togglePopup={() => setPingPopupVisible(!pingPopupVisible)} text={'Ping'} />
          {pingPopupVisible && <Popup example={'Нужно ввести команду "ping адрес", например "ping yandex.ru" или "ping 77.88.8.8"'} />}
        </div>
        <div>
          <ButtonComponent togglePopup={() => setTracePopupVisible(!tracePopupVisible)} text={'Trace'} />
          {tracePopupVisible && <Popup example={'Введите команду: traceroute имя_сайта (домен) или traceroute IP_сервера.'} />}
        </div>
        <div>
          <ButtonComponent togglePopup={() => setNetstatPopupVisible(!netstatPopupVisible)} text={'Netstat'} />
          {netstatPopupVisible && <Popup example={'netstat [-a] [-b] [-e] [-n] [-o] [-p <Protocol>] [-r] [-s] [<interval>]'} />}
        </div>
      </div>
    </div>
    </div>
  );
};
