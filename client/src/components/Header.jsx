import '../styles/index.css'
import {Link, useLocation} from "react-router-dom";
import {RoutesPaths} from "../index";


const isActive = ({to,pathname}) => {
    return to === pathname
}
//TODO(dmtsai): add pretty styles for active link plsplspls
export const Header = () => {
    const location = useLocation();
    return(
        <div className='h-16 w-full fixed top-0 z-50'>
            <div className="h-full w-full flex flex-row justify-between items-center px-64 py-2 ">
                <Link to={'https://omsu.ru/'} className='flex w-1/5 gap-x-3 flex-row items-center justify-start'>
                    <img className='w-10 h-10' src={require("../assets/icon4.png")} alt="icon" />
                    <p className=' text-3xl'>Omsu <span className={'text-slate-600'}>Network</span></p>
                </Link>
                <div className='flex flex-row w-3/5 self-center items-center justify-center gap-x-10'>

                     <Link to={RoutesPaths.CONSOLE} className={`text-xl ${isActive({to: RoutesPaths.CONSOLE, pathname: location.pathname}) && 'font-bold'}`}>Console</Link>


                      <Link to={RoutesPaths.STATS} className={`text-xl ${isActive({to: RoutesPaths.STATS, pathname: location.pathname}) && 'font-bold'}`}>User statistics</Link>

                </div>
                <div className='w-1/5 h-14 px-9 py-2'>
                    <Link to={RoutesPaths.PROFILE} className="w-full h-full bg-gray-700 text-white flex justify-center items-center">Profile</Link>
                </div>
            </div>
                <div className="bg-gray-400 h-0.5 w-[86.7%] fixed top-20 flex items-center ml-32 rounded-full"></div>
        </div>
    )
}