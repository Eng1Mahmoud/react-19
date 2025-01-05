import { useUserContext } from "../../context/user/UserContextValue"

const Profile = () => {
    const {user} = useUserContext();
  return (
    <div>
        <h1>Profile</h1>
        <p>Name: {user?.name}</p>
    </div>
  )
}

export default Profile