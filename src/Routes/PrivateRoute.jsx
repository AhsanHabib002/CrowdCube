import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Pages/Loader";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        <Loader></Loader>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to={"/auth/login"}></Navigate>
    );
};

export default PrivateRoute;