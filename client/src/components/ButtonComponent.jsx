import React from 'react';

export const ButtonComponent = ({ togglePopup, text ,isActive}) => {
  return <button className={`flex px-5  items-start font-bold transition-all ${isActive ? 'w-full  bg-gradient-to-r from-info-btn to-gray-700 ':'w-full hover:bg-gradient-to-r hover:from-info-btn  hover:to-gray-700'}`} onClick={togglePopup}>{text}</button>;
};

