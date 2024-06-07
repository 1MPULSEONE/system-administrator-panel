import { useState, useEffect } from "react";

export const Input = ({ setSavedValue }) => {
  const [inputValue, setInputValue] = useState("");
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSaveButtonClick = () => {
    setSavedValue(inputValue);
    setInputValue("");
    
  };

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        setSavedValue(inputValue);
        setInputValue("");
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [inputValue,setSavedValue]);
  const clearInput = (target)=> {
    if (target.value === 'clear input'){
        target.value= "";
   }
}

    return (
      <div className="flex flex-col gap-y-5 ">
        <input
          onChange={handleInputChange}
          className="w-64 px-4 py-2 rounded-md border border-gray-500 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Введите команду"
          onFocus={clearInput}
          value={inputValue}
        />
        <div className={'flex flex-col items-center justify-center px-12 py-2 w-full'}>
        <button
        onClick={handleSaveButtonClick}
        className='w-full py-4 bg-violet-700 text-white rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50'>
      </button>
        </div>
      </div>
      );
}
