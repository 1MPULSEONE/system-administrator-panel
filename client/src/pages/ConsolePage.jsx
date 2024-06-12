import React, {useEffect, useState} from "react";
import {Header} from "../components/Header";
import {CommandList} from "../components/CommandList";
import {Console} from "../components/Console";
import {Input} from "../components/Input";
import {useTraceMutate} from "../api/mutations/trace";
import {usePingMutate} from "../api/mutations/ping";
import {useNetstatMutate} from "../api/mutations/netstat";

export const  ConsolePage  = () => {

    const [savedValue, setSavedValue] = useState(undefined);
    const [currentCommand,setCurrentCommand] = useState(undefined);

    useEffect(()=> {
        if(currentCommand) {
            const fetchData = async () => {
                const cmd = currentCommand.split(' ');
                const requestBody = {
                    ip: cmd[1],
                };
                const data = await fetch(`http://localhost:5000/${cmd[0]}`, {
                    mode: 'cors',
                    method: 'POST',
                    headers: {'Content-Type': 'application/json; charset=utf-8'},
                    body: JSON.stringify(requestBody)
                })
                const body = await data.json()
                console.log(body.data.output);

                if (body && cmd[0] === 'ping') {
                    setSavedValue(body.data.output);
                }
                if (body && cmd[0] !== 'ping') {
                    setSavedValue(body.data);
                }
            }
            fetchData().catch(console.error);

        }

    },[currentCommand])

    return (
        <div className="flex flex-col h-screen w-screen noise-background">
            <Header />
            <div className="flex flex-row justify-start mt-36 w-full pl-40 gap-x-36 items-start">
                <div className='flex flex-col items-start justify-start h-full w-1/6'>
                    <CommandList />
                </div>
                <div className='flex flex-col justify-center gap-y-10 w-2/5 items-center'>
                    <Console  savedValue={savedValue} />
                    <Input  setCurrentCommand={setCurrentCommand}/>
                </div>
            </div>
        </div>
    );
};