
export const Header = () => {
    return(
        
            <div className=" h-16 w-full bg-blue-600 flex justify-between text-white fixed top-0 z-50">
                <div>
                <img className='w-5 h-5' src={require("./assets/icon4.png")} alt="icon" />
                <p>Omsu Network</p>
                </div>
                <a href="##" className="mt-4">ping</a>
                <a href="###" className="mt-4">stats</a>
                <a href="####" className="mt-4 mr-12">profile</a>
            </div>
    )
}