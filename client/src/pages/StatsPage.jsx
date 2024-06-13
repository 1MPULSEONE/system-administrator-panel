import {Header} from "../components/Header";
import {StatsProfile} from "../components/StatsProfile";

const data  = [
    {
        login: 'parkhomenko2049@gmail.com',
        status: 'online',
        time:  new Date().toDateString(),
    },
    {
        login: 'raft.arenda@mail.ru',
        status: 'offline',
        time:  new Date(2024,6,12).toDateString(),
    },
    {
        login: 'kostya.pashkov.90@mail.ru',
        status: 'offline',
        time:  new Date(2024,6,11).toDateString(),
    },
    {
        login: 'arusaeva76@gmail.com',
        status: 'offline',
        time:new Date(2024,6,12).toDateString(),
    },
    {
        login: 'cfyz1553@mail.ru',
        status: 'offline',
        time: new Date(2024,6,12).toDateString(),
    },
]

export const StatsPage = () => {
    return (
        <div className="flex flex-col h-screen w-screen noise-background">
            <Header />
            <div className="flex flex-col justify-start mt-36  h-full gap-y-10 items-center px-10">
                {
                    data.map((user,index) => (
                        <StatsProfile timer={user.time} userName={user.login} status={user.status} key={index} />
                    ))
                }
            </div>
        </div>
    )

}