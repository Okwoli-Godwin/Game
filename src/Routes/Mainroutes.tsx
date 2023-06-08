import { createBrowserRouter } from "react-router-dom"
import { HomeLayout } from "../components"
import Hero from "../Pages/Hero"

export const Elements = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Hero />
            }
        ]
    }
])