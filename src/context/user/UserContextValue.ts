import {use } from "react";
import { UserContext } from './../context';
export const useUserContext = () => {
    const context = use(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserContextProvider");
    }
    return context;
}