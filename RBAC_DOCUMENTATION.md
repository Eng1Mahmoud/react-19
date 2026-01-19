# Role-Based Protected Routes - Documentation

## Overview
This application implements a comprehensive role-based access control (RBAC) system for React Router with the following features:

- **Authentication State Management**: User login/logout with persistent sessions
- **Role-Based Access Control**: Different access levels for different user roles
- **Protected Routes**: Automatic redirects based on authentication and authorization
- **Type-Safe**: Full TypeScript support

## User Roles

The system supports 4 different roles with increasing levels of access:

1. **guest** - Limited access (lowest privilege)
2. **user** - Standard user access
3. **moderator** - Elevated access for content management
4. **admin** - Full system access (highest privilege)

## Route Structure

### Public Routes (No authentication required)
- `/` - Home page
- `/hero` - Landing page
- `/products` - Product list
- `/form-actions` - Form actions demo
- `/todo-optimistic` - Todo list demo
- `/use-defered-value` - Use deferred value demo

### Authentication Routes
- `/login` - Login page
- `/unauthorized` - Access denied page

### Protected Routes

#### Any Authenticated User
- `/profile` - User profile (requires authentication only)

#### User, Moderator, or Admin
- `/dashboard` - Main dashboard
- `/users` - User list

#### Moderator or Admin Only
- `/settings` - Application settings

#### Admin Only
- `/admin` - Admin panel

## How to Use

### Testing Different Roles

1. Navigate to `/login`
2. Enter any email and password
3. Select a role from the dropdown:
   - **Admin**: Full access to all routes
   - **Moderator**: Access to dashboard, settings, and profile
   - **User**: Access to dashboard and profile
   - **Guest**: Limited access (will be denied most protected routes)

### Code Examples

#### Creating a Protected Route

```tsx
// Require authentication only
<Route element={<ProtectedRoute requireAuth={true} />}>
  <Route path="/profile" element={<Profile />} />
</Route>

// Require specific roles
<Route element={<ProtectedRoute allowedRoles={['admin']} />}>
  <Route path="/admin" element={<AdminPanel />} />
</Route>

// Multiple roles allowed
<Route element={<ProtectedRoute allowedRoles={['user', 'moderator', 'admin']} />}>
  <Route path="/dashboard" element={<Dashboard />} />
</Route>
```

#### Using Authentication Context in Components

```tsx
import { useUserContext } from "../context/user/UserContextValue";

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useUserContext();
  
  // Check authentication status
  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }
  
  // Access user data
  return (
    <div>
      <p>Welcome, {user?.name}</p>
      <p>Role: {user?.role}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

#### Conditional Rendering Based on Role

```tsx
import { useUserContext } from "../context/user/UserContextValue";

function Navigation() {
  const { user, isAuthenticated } = useUserContext();
  
  return (
    <nav>
      {isAuthenticated && (
        <>
          <Link to="/dashboard">Dashboard</Link>
          
          {user?.role === 'admin' && (
            <Link to="/admin">Admin Panel</Link>
          )}
          
          {(user?.role === 'admin' || user?.role === 'moderator') && (
            <Link to="/settings">Settings</Link>
          )}
        </>
      )}
    </nav>
  );
}
```

## File Structure

```
src/
├── components/
│   ├── ProtectedRoute.tsx       # Protected route wrapper component
│   └── Header.tsx                # Navigation header with auth state
├── context/
│   ├── context.ts                # Context creation
│   └── user/
│       ├── userProvider.tsx      # Auth state provider
│       └── UserContextValue.ts   # Custom hook for context
├── types/
│   └── context.ts                # Type definitions for User and roles
└── routes/
    ├── routes.tsx                # Main routing configuration
    └── pages/
        ├── Login.tsx             # Login page
        ├── Unauthorized.tsx      # Access denied page
        ├── Dashboard.tsx         # User dashboard
        ├── AdminPanel.tsx        # Admin-only page
        └── Settings.tsx          # Moderator/Admin page
```

## Key Components

### ProtectedRoute Component

The `ProtectedRoute` component handles:
- Authentication checks
- Role-based authorization
- Automatic redirects to `/login` or `/unauthorized`
- Support for nested routes with `Outlet`

**Props:**
- `allowedRoles?: UserRole[]` - Array of roles allowed to access the route
- `requireAuth?: boolean` - Whether authentication is required (default: true)
- `children?: React.ReactNode` - Optional children components

### UserContextProvider

Provides authentication state and methods throughout the app:

**State:**
- `user: User | null` - Current user object or null if not authenticated
- `isAuthenticated: boolean` - Authentication status

**Methods:**
- `login(email: string, password: string, role?: UserRole)` - Mock login function
- `logout()` - Logout function that clears user state

**Features:**
- Persists user data in localStorage
- Automatically restores session on page reload

## Security Notes

⚠️ **Important**: This is a frontend-only demo implementation. In a production application:

1. **Never trust client-side role validation alone**
   - Always validate permissions on the backend
   - Frontend checks are for UX only

2. **Implement proper authentication**
   - Use secure token-based authentication (JWT, OAuth)
   - Validate tokens on the server for every request
   - Store tokens securely (httpOnly cookies recommended)

3. **Server-side authorization**
   - Every API endpoint must validate user permissions
   - Never rely solely on hiding UI elements

4. **Secure session management**
   - Implement token refresh mechanisms
   - Handle token expiration properly
   - Clear sensitive data on logout

## Extending the System

### Adding New Roles

1. Update the `UserRole` type in [src/types/context.ts](src/types/context.ts):
```tsx
export type UserRole = 'admin' | 'user' | 'guest' | 'moderator' | 'editor';
```

2. Add the new role to the login dropdown in [src/routes/pages/Login.tsx](src/routes/pages/Login.tsx)

3. Create routes with the new role in [src/routes/routes.tsx](src/routes/routes.tsx)

### Adding New Protected Routes

1. Create your page component in `src/routes/pages/`
2. Import it in [src/routes/routes.tsx](src/routes/routes.tsx)
3. Wrap it with `ProtectedRoute` and specify allowed roles:

```tsx
<Route element={<ProtectedRoute allowedRoles={['editor', 'admin']} />}>
  <Route path="/edit-content" element={<ContentEditor />} />
</Route>
```

## Testing Scenarios

1. **Unauthorized Access**: Try accessing `/admin` as a regular user
2. **Login Flow**: Access a protected route while logged out, then login
3. **Role Switching**: Login with different roles and observe access changes
4. **Session Persistence**: Refresh the page while logged in
5. **Logout**: Logout and try accessing protected routes

## Troubleshooting

**Issue**: Getting redirected to unauthorized page
- **Solution**: Check that your user role is included in the `allowedRoles` array for that route

**Issue**: Can't access any protected routes
- **Solution**: Make sure you're logged in. Check the Header to see your authentication status

**Issue**: User state not persisting after refresh
- **Solution**: Check browser console for localStorage errors. Ensure localStorage is available

## Future Enhancements

- [ ] Add permission-based access (more granular than roles)
- [ ] Implement route-level loading states
- [ ] Add "Remember Me" functionality
- [ ] Implement password reset flow
- [ ] Add multi-factor authentication
- [ ] Create admin user management UI
- [ ] Add activity logging
- [ ] Implement token refresh mechanism
