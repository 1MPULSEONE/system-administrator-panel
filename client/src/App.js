import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/index.css';
import { Header } from './Header';
import { Console } from './Console';
import { Input } from './Input';
import './styles/index.css'
import { Help } from './help';

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
    <div className="flex flex-col h-screen w-screen noise-background ">
      <Header />
      <div className="flex flex-row justify-start mt-36 w-full pl-40 gap-x-36 items-start">
        <div className='flex flex-col items-start justify-start h-full w-1/6'>
          <Help />
        </div>
        <div className='flex flex-col justify-center gap-y-10 w-2/5 items-center'>
          <Console  savedValue={savedValue} />
          <Input  setSavedValue={handleSavedValue}/>
        </div>
      </div>
    </div>
  );
}

export default App;