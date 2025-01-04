import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <h1 className="text-[40px] font-bold text-center mt-10 text-blue-800">React 19</h1>
        <ul className="space-y-4 p-6  w-full">
          <li>
            <Link
              to="/form-actions"
              className="block  rounded-lg hover:bg-gray-50 transition-colors text-blue-600 hover:text-blue-700"
            >
              useFormStatus and useActionState
            </Link>
          </li>
          <li>
            <Link
              to="/todo-optimistic"
              className="block  rounded-lg hover:bg-gray-50 transition-colors text-blue-600 hover:text-blue-700"
            >
              useOptimistic
            </Link>
          </li>
        
        
          <li>
            <Link
              to="/users"
              className="block rounded-lg hover:bg-gray-50 transition-colors text-blue-600 hover:text-blue-700"
            >
              JSONPlaceholder Users
            </Link>
          </li>
        </ul>
    </div>
  );
};

export default Home;
