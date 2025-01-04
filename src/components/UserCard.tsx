import { User } from '../types/user';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{user.name}</h3>
      <div className="space-y-2 text-gray-600">
        <p><span className="font-semibold">Username:</span> {user.username}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
        <p><span className="font-semibold">Phone:</span> {user.phone}</p>
        <p><span className="font-semibold">Website:</span> {user.website}</p>
        <div className="mt-4">
          <p className="font-semibold">Company:</p>
          <p className="ml-4">{user.company.name}</p>
          <p className="ml-4 text-sm italic">{user.company.catchPhrase}</p>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Address:</p>
          <p className="ml-4">
            {user.address.street}, {user.address.suite}<br />
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
}
