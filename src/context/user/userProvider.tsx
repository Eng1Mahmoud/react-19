import { ReactNode } from "react"; 
import { UserContext } from "../context";

const UserContextProvider = ({children}:{children:ReactNode}) => {
    return (
        <UserContext value={{user:{name:"John Doe"}}}>
            {children}
        </UserContext>
    )
}

export default UserContextProvider