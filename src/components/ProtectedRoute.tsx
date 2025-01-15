import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoute = () => {
    const  user = false
  return  user ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute