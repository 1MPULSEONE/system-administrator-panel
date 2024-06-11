import React, {useEffect, useState} from "react";
import {Header} from "../components/Header";
import {CommandList} from "../components/CommandList";
import {Console} from "../components/Console";
import {Input} from "../components/Input";

export const  ConsolePage  = () => {
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
        <div className="flex flex-col h-screen w-screen noise-background">
            <Header />
            <div className="flex flex-row justify-start mt-36 w-full pl-40 gap-x-36 items-start">
                <div className='flex flex-col items-start justify-start h-full w-1/6'>
                    <CommandList />
                </div>
                <div className='flex flex-col justify-center gap-y-10 w-2/5 items-center'>
                    <Console  savedValue={savedValue} />
                    <Input  setSavedValue={handleSavedValue}/>
                </div>
            </div>
        </div>
    );
};