
import {Navbar} from '../UI/Navbar.jsx'
import {Outlet} from 'react-router-dom'
import {Footer} from '../UI/Footer.jsx'

const AppLayout=()=>{
return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
    )
}

export default AppLayout