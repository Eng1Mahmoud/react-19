import { Suspense } from 'react';
import { fetchUsers } from '../../api/users';
import { UsersList } from '../../components/UserList';
import { ErrorBoundary } from 'react-error-boundary';
export default function UsersPage() {
  // Create the promise once at the top level
  const usersPromise = fetchUsers();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Users List</h1>
      <p className="mb-6 text-gray-600">
        This example demonstrates using React's use() API with JSONPlaceholder API
      </p>
  <ErrorBoundary fallback={<div>Something went wrong</div>}> 
      <Suspense 
        fallback={
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="text-lg text-gray-600">Loading users...</div>
          </div>
        }
      >
        <UsersList usersPromise={usersPromise} />
      </Suspense>
   </ErrorBoundary> 
    </div>
  );
}
