import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ProjectDetails from "../components/PortfolioDetails/ProjectDetails";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: `/projectDetails/:id`,
                element: <ProjectDetails />,
                loader: ({ params }) => fetch(`https://react-portfolio-server-pi.vercel.app/projects/${params.id}`)
            },
        ]
    },
]);
