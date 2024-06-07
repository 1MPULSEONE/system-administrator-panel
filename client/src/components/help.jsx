import React, { useState } from "react";
import {Popup} from "./Popup";
import {ButtonComponent} from "./ButtonComponent";

export const Help = () => {
  const [pingPopupVisible, setPingPopupVisible] = useState(false);
  const [tracePopupVisible, setTracePopupVisible] = useState(false);
  const [netstatPopupVisible, setNetstatPopupVisible] = useState(false);

  return (
<div className="flex flex-col items-center w-full h-[76.39%] rounded-2xl justify-between">
  <div className="bg-slate-400 w-full h-10 rounded-t-3xl flex justify-center items-center">
  Сommand list
  </div>
  <div className="bg-gray-700 h-full w-full rounded-b-3xl overflow-y-scroll no-scrollbar pt-4">
    <div className="text-white flex flex-col gap-y-10 w-full">
      <div className={'flex flex-col  w-full'}>
        <ButtonComponent togglePopup={() => setPingPopupVisible(!pingPopupVisible)} isActive={pingPopupVisible} text={'Ping'} />
        {pingPopupVisible && <Popup example={'Нужно ввести команду "ping адрес", например "ping yandex.ru" или "ping 77.88.8.8"'} />}
      </div>
      <div className={'flex flex-col w-full'}>
        <ButtonComponent togglePopup={() => setTracePopupVisible(!tracePopupVisible)}  isActive={tracePopupVisible} text={'Trace'} />
        {tracePopupVisible && <Popup example={'Введите команду: traceroute имя_сайта (домен) или traceroute IP_сервера.'} />}
      </div>
      <div className={'flex flex-col w-full'}>
        <ButtonComponent togglePopup={() => setNetstatPopupVisible(!netstatPopupVisible)} isActive={netstatPopupVisible}  text={'Netstat'} />
        {netstatPopupVisible && <Popup example={'netstat [-a] [-b] [-e] [-n] [-o] [-p <Protocol>] [-r] [-s] [<interval>]'} />}
      </div>
    </div>
  </div>
</div>
  );
};
