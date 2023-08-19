import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import EnvironmentalIssues from "./components/Issues/EnvironmentalIssues";
import Login from "./components/LogIn/LogIn";
import Register from "./components/LogIn/Register";

const routes = [
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/aboutus",
    element: <AboutUs/>
  },
  {
    path: "/gallery",
    element: <Gallery/>
  },
  {
    path: "/issues",
    element: <EnvironmentalIssues/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  }
]

export default routes;