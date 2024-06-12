import {useEffect} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {RoutesPaths} from "../App";

export const Layout = () => {
    const isAuth = localStorage.getItem('auth');
    const navigate = useNavigate();

    useEffect(() => {
        isAuth ?   navigate(RoutesPaths.CONSOLE) : navigate(RoutesPaths.AUTH) ;
    }, [localStorage]);

    return(
        <>
        <Outlet/>
        </>
    )
}