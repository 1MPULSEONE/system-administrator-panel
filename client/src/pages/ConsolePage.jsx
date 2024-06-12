import React, {useEffect, useState} from "react";
import {Header} from "../components/Header";
import {CommandList} from "../components/CommandList";
import {Console} from "../components/Console";
import {Input} from "../components/Input";
import {useTraceMutate} from "../api/mutations/trace";
import {usePingMutate} from "../api/mutations/ping";
import {useNetstatMutate} from "../api/mutations/netstat";

export const  ConsolePage  = () => {

    const [savedValue, setSavedValue] = useState([]);
    const [currentCommand,setCurrentCommand] = useState(undefined);

    const handleSavedValue = (newValue) => {
        setSavedValue( prev=>[...prev,newValue]);
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

    const {mutate:trace, isPending: isTracePending, isSuccess:isTraceSuccess,data:traceData} = useTraceMutate();
    const {mutate:ping, isPending: isPingPending, isSuccess:isPingSuccess,data:pingData} = usePingMutate();
    const {mutate:netstat, isPending: isNetstatPending, isSuccess: isNetstatSuccess,data:netstatData} = useNetstatMutate();

    const getData = ({command,option}) => {
        switch (command) {
            case 'ping': {
                ping(option);
                break;
            }
            case 'trace': {
                trace(option);
                break;
            }
            case 'netstat': {
                netstat(option);
                break;
            }
        }

        if ( isTraceSuccess &&  traceData.data ) {
            return  traceData.data
        }

        if ( isPingSuccess && pingData.data.output) {
           return  pingData.data.output
        }

        if ( isNetstatSuccess &&  netstatData.data ) {
           return  netstatData.data
        }

        return undefined;
    }
    // получение GET маршрута с сервера Express, который соответствует GET из server.js
    useEffect(() => {
        callBackendAPI()
            .then(res => setState(res.express))
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        console.log('SAVED VAL',savedValue)
        if(savedValue.length > 0 && !currentCommand) {
            const stringifyCommand = savedValue[savedValue.length - 1].split(' ')
            const parsedCommand = {
                command: stringifyCommand[0],
                option:  stringifyCommand[1]
            }
            setCurrentCommand(parsedCommand);
        }
    }, [savedValue]);

    useEffect(() => {

        if(currentCommand) {
            console.log('CRT CMD', currentCommand);
            const result =   getData(currentCommand)
            if(result) {
                setSavedValue(prev =>[...prev,'RESULT',result]);
            }
            setCurrentCommand(undefined)
        }

    }, [isTraceSuccess, isPingSuccess, isNetstatSuccess,savedValue]);

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