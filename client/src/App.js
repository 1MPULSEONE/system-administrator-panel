import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/index.css';
import { Header } from './Header';
import { Console } from './Console';
import { Input } from './Input';

function App() {

  const [savedValue, setSavedValue] = useState([]);
  
  const handleSavedValue = (newValue) => {
    setSavedValue( [...savedValue,newValue]);
  }

  const [state, setState] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };
  
  // получение GET маршрута с сервера Express, который соответствует GET из server.js 
  useEffect(() => {
    callBackendAPI()
    .then(res => setState(res.express))
    .catch(err => console.log(err));
  }, [])

  return (
    <div className="flex h-screen w-screen">
      <Header />
      <div className='flex flex-col justify-center items-center w-full h-full'>
         <Console  savedValue={savedValue} />
         <Input  setSavedValue={handleSavedValue}/>
      </div>
      
      

      {/* вывод данных, полученных с сервера Express */}
      <div>
          {state}
      </div>
    </div>
  );
}

export default App;