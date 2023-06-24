import { AuthContext } from "../context/AuthContex";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within AuthContextProvider");

    }
    
    return context;
    };