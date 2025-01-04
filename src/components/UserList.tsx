import { use } from "react";
import { User } from "../types/user";
import { UserCard } from "./UserCard";
export function UsersList({ usersPromise }: { usersPromise: Promise<User[]> }) {
    const users = use(usersPromise);
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users?.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }