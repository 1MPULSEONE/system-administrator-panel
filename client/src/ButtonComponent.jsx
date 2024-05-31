import React from 'react';

export const ButtonComponent = ({ togglePopup, text }) => {
  return <button className='hover:bg-violet-700 h-10 w-20 rounded-md font-bold ' onClick={togglePopup}>{text}</button>;
};

