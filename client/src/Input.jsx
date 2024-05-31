import { useState } from "react";

export const Input = ({ setSavedValue }) => {
  const [inputValue, setInputValue] = useState("");
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSaveButtonClick = () => {
    setSavedValue(inputValue);
  };

    return (
      <div>
        <input
          onChange={handleInputChange}
          className="w-64 px-4 py-2 rounded-md border border-gray-500 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Введите команду"
        />
        <div className="ml-16">

        <button
        onClick={handleSaveButtonClick}
        className=' px-16 py-4 mt-5 bg-violet-700 text-white rounded-md shadow-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50'>
      </button>
        </div>
      </div>
      );
}