import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import { Helmet } from "react-helmet"
import NewLogo from '../assets/logo/newlogo.png'

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