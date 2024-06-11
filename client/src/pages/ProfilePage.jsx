import {useTraceMutate} from "../api/mutations/trace";
import {usePingMutate} from "../api/mutations/ping";
import {useNetstatMutate} from "../api/mutations/netstat";
import {useEffect} from "react";

export const ProfilePage  =  () => {
    const {mutate:trace, isPending: isTracePending, isSuccess:isTraceSuccess,data:traceData} = useTraceMutate();
    const {mutate:ping, isPending: isPingPending, isSuccess:isPingSuccess,data:pingData} = usePingMutate();
    const {mutate:netstat, isPending: isNetstatPending, isSuccess: isNetstatSuccess,data:netstatData} = useNetstatMutate();

    useEffect(() => {
       if( isNetstatSuccess)
        {
            console.log(netstatData)
        }
    }, [netstatData,netstat,isNetstatSuccess]);

    useEffect(() => {
        if( isPingSuccess)
        {
            console.log(pingData)
        }
    }, [pingData,ping]);

    useEffect(() => {
        if(isTraceSuccess)
        {
            console.log(traceData)
        }
    }, [traceData,trace,isTraceSuccess,]);



    return (

        <div className={'flex flex-col gap-y-10 items-center justify-center'}>
            <div className={`w-24 h-24 ${isTracePending ? 'bg-amber-600' : 'bg-green-700'}`} onClick={() => trace('google.com')}>ТРАСЕ</div>
            <div className={'w-24 h-24 bg-red-300'} onClick={() =>{ping('google.com')}}>ПИНГА</div>
            <div className={'w-24 h-24 bg-red-300'} onClick={() => {netstat('google.com')}}>НЕТСТАТ</div>
        </div>

    )
}