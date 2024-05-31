import './styles/index.css'


export const Header = () => {
    return(
        <div className='h-16 w-full fixed top-0 z-50'>
            <div className="h-full w-full flex flex-row justify-between items-center px-64 py-2 ">
                <div className='flex w-1/5 gap-x-7 flex-row items-start justify-start'>
                    <img className='w-10 h-10' src={require("./assets/icon4.png")} alt="icon" />
                    <p className=' text-3xl'>Omsu Network</p>
                </div>
                <div className='flex flex-row w-3/5 self-center items-center justify-center gap-x-10'>
                    <a href="##" className="">Console</a>
                    <a href="###" className="">Stats</a>
                </div>
                <div className='w-1/5 h-14 px-9 py-1'>
                    <a href="####" className="w-full h-full bg-gray-700 text-white flex justify-center items-center">Profile</a>
                </div>
            </div>
                <div class="bg-gray-400 h-0.5 w-[86.7%] fixed top-20 flex items-center ml-32 rounded-full"></div>
        </div>
    )
}