export type UserRole = 'admin' | 'user' | 'guest' | 'moderator';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
}

export interface IUserContext {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string, role?: UserRole) => void;
    logout: () => void;
}