import { RouteProps } from "react-router-dom";
import Home from "../components/Home";
import Search from "../components/Search";

interface AppRouteProps extends RouteProps {
    label: string
}

const routes: AppRouteProps[] = [
    {
        label: "Home",
        path: "/",
        exact: true,
        component: Home
    },
    {
        label: "Search",
        path: "/search",
        exact: true,
        component: Search
    }
]

export default routes;