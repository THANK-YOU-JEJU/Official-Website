import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import EnvironmentalIssues from "./components/Issues/EnvironmentalIssues";
import Login from "./components/LogIn/LogIn";
import Register from "./components/LogIn/Register";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Navigate to="home" />}/>
        <Route path="home" element={<Home/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>
        <Route path="gallery" element={<Gallery/>}/>
        <Route path="issues" element={<EnvironmentalIssues/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Route>
    </Routes>
  )
}

export default App