import CustomLink from "./CustumLink";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <div className='navBarMenu'>
                <a href="/">
                    <img style={{width: 100}} src="/logo.png" alt="SecurityLogo"/>
                </a>
                <nav>
                    <CustomLink  to="/main-page" >Main</CustomLink>
                    <CustomLink  to="/services">Services</CustomLink>
                </nav>
            </div>
            <Outlet />
        </>
    );
}

export default Layout