import { ReactNode, useState } from "react"; 
import { UserContext } from "../context";
import { User, UserRole } from "../../types/context";

const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (email: string, _password: string, role: UserRole = 'user') => {
        // This is a mock login - in real app, you'd call an API and validate password
        // For demo purposes, we'll create a user based on the email
        const mockUser: User = {
            id: Date.now().toString(),
            name: email.split('@')[0],
            email: email,
            role: role
        };
        setUser(mockUser);
        // Store in localStorage for persistence
        localStorage.setItem('user', JSON.stringify(mockUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    // Check for existing user on mount
    useState(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    });

    return (
        <UserContext value={{
            user,
            isAuthenticated: !!user,
            login,
            logout
        }}>
            {children}
        </UserContext>
    );
};

export default UserContextProvider;