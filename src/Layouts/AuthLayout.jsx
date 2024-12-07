import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;