import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import {useState} from "react";

export const AuthPage = () => {
const [isSignIn,setIsSignIn] = useState(true);
    return (
        <div className={'flex flex-col gap-y-5'}>
            {
                isSignIn ?   <LogIn setIsOpen={setIsSignIn}/> :  <SignUp setIsOpen={setIsSignIn}/>
            }
        </div>
    )
}