import {Header} from "../components/Header";
import {StatsProfile} from "../components/StatsProfile";

const data  = [
    {
        login: 'ZXCMonstr1337',
        status: 'online',
        time:  new Date().toDateString(),
    },
    {
        login: 'Salfetka',
        status: 'offline',
        time:  new Date().toDateString(),
    },
    {
        login: 'ZXCMonstr1337',
        status: 'online',
        time:  new Date().toDateString(),
    },
    {
        login: 'Salfetka',
        status: 'offline',
        time: new Date().toDateString(),
    },
    {
        login: 'ZXCMonstr1337',
        status: 'online',
        time:  new Date().toDateString(),
    },
    {
        login: 'Salfetka',
        status: 'offline',
        time:  new Date().toDateString(),
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