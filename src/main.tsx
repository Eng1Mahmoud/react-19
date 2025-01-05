import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRoutes } from './routes/routes'
import UserContextProvider from "./context/user/userProvider";
createRoot(document.getElementById('root')!).render(
 
    <UserContextProvider>
        <AppRoutes />
    </UserContextProvider>
)
