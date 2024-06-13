
import '../styles/index.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import  { RoutesPaths} from '../App';
import {createClient} from "@supabase/supabase-js";


const isActive = ({to,pathname}) => {
    return to === pathname
}
const supabase = createClient(
    "https://cnojvmxqbjmdqqvdmgsf.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNub2p2bXhxYmptZHFxdmRtZ3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxMjczODcsImV4cCI6MjAzMzcwMzM4N30.gpS2mXB8Dbec8Cw12JLJi6-Ewha9n8Xr5-49GoXB9jI"
);

//TODO(dmtsai): add pretty styles for active link plsplspls
export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await supabase.auth.signOut();
            // Выход выполнен успешно
        } catch (error) {
            console.error('Ошибка выхода:', error);
        }
    };
    return(
        <div className='h-16 w-full fixed top-0 z-50'>
            <div className="h-full w-full flex flex-row justify-between items-center px-64 py-2 ">
                <Link to={'https://omsu.ru/'} className='flex w-1/5 gap-x-3 flex-row items-center justify-start'>
                    <img className='w-10 h-10' src={require("../assets/console_icon.png")} alt="icon" />
                    <p className=' text-3xl'>Omsu <span className={'text-slate-600'}>Network</span></p>
                </Link>
                <div className='flex flex-row w-3/5 self-center items-center justify-center gap-x-10'>

                     <Link to={RoutesPaths.CONSOLE} className={`text-xl ${isActive({to: RoutesPaths.CONSOLE, pathname: location.pathname}) && 'font-bold'}`}>Console</Link>


                      <Link to={RoutesPaths.STATS} className={`text-xl ${isActive({to: RoutesPaths.STATS, pathname: location.pathname}) && 'font-bold'}`}>User statistics</Link>

                </div>
                <div className='w-1/5 h-14 px-9 py-2'>
                    <div onClick={() => {
                        handleLogout();
                        localStorage.setItem('sb-cnojvmxqbjmdqqvdmgsf-auth-token', undefined);
                        localStorage.setItem('auth', false);
                        navigate(RoutesPaths.AUTH);
                    }} className="w-full h-full bg-gray-700 text-white flex justify-center items-center">Log out</div>
                </div>
            </div>
                <div className="bg-gray-400 h-0.5 w-[86.7%] fixed top-20 flex items-center ml-32 rounded-full"></div>
        </div>
    )
}