import {useTraceMutate} from "../api/mutations/trace";
import {usePingMutate} from "../api/mutations/ping";
import {useNetstatMutate} from "../api/mutations/netstat";
import {useEffect} from "react";

export const ProfilePage  =  () => {
    return (

        <div className={'flex flex-col gap-y-10 items-center justify-center'}>
            <div className={`w-24 h-24 ${isTracePending ? 'bg-amber-600' : 'bg-green-700'}`} onClick={() => trace('google.com')}>ТРАСЕ</div>
            <div className={'w-24 h-24 bg-red-300'} onClick={() =>{ping('google.com')}}>ПИНГА</div>
            <div className={'w-24 h-24 bg-red-300'} onClick={() => {netstat('google.com')}}>НЕТСТАТ</div>
        </div>

    )
}