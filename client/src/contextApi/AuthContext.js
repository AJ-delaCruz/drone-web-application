import { createContext, useState, useEffect } from "react";

//create new context object for authentication
export const AuthContext = createContext();


// create the component to share states to its children components
export const AuthProvider = ({ children }) => {
    //state that will be shared 
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('token') || null);


    const login = async (token) => {
        localStorage.setItem("token", token);
        setCurrentUser(token);
        // console.log("context: " + currentUser);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setCurrentUser(null);
    };

    // Wrap the AuthProvider children with the context provider 
    // and pass the state as value to all its descendants in the component tree
    return <AuthContext.Provider value={{ currentUser, login, logout }}>
        {children}
    </AuthContext.Provider>;
};
