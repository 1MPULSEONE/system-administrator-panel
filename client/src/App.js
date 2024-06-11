import React from 'react';
import './styles/index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {StatsPage} from "./pages/StatsPage";
import {ProfilePage} from "./pages/ProfilePage";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ConsolePage} from "./pages/ConsolePage";

export const RoutesPaths = {
    CONSOLE: '/',
    STATS: '/stats',
    // PROFILE: (login) => `/profile:${login}`,
    PROFILE : '/profile'
}


const router = createBrowserRouter([
        {
            path: RoutesPaths.CONSOLE,
            element: <ConsolePage/>
        },
        {
            path:  RoutesPaths.STATS,
            element: <StatsPage/>
        },
        {
            path: RoutesPaths.PROFILE,
            element: <ProfilePage/>


        }
    ]
)
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}

export default App;