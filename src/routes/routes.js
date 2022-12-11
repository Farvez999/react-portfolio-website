import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import DetailsProjects from "../components/Portfolio/DetailsProjects";
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
                path: `/details/:id`,
                element: <DetailsProjects></DetailsProjects>,
                loader: ({ params }) => fetch(`ProjectsData/${params.id}.json`)

            },
        ]
    },
]);
