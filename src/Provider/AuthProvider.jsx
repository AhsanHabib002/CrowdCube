import { createContext, useState } from "react";

export const AuthContext= createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name:"ahsan",
        emial:"habib@gmail.com"
    });

    const authInfo = {
        user,
        setUser,
    };
    
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;