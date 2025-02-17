import { Route, Routes } from "react-router-dom"
import Projects from "../pages/Projects"
import Home from "../pages/Home"
import Certificates from '../pages/Certificates'
import { Helmet } from "react-helmet"
import Logo from '../assets/logo/P.png'
import NewLogo from '../assets/logo/newlogo.png'
import { useColorContext } from "../context/ColorContext"

const AppContent = () => {


    return (

        <>

        <Helmet>
            <title>Patrick Bell | Portfolio</title>
            <link rel="icon" href={NewLogo} />
        </Helmet>

        <Routes>

            <Route path="/" element={<Home />}></Route>
        </Routes>
        
        
        </>
    )
}


export default AppContent