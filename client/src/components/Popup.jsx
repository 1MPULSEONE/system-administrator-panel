import React from 'react';

export const Popup = ({example}) => {
  return (
    <div className='flex flex-col px-5  py-3 items-start bg-gray-600 bg-opacity-40'>
      <p>{example}</p>
    </div>
  );
};
