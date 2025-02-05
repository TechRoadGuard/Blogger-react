import { Search, LogIn, UserPlus } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md py-3 px-6 flex justify-between items-center z-10">
    
      <div className="flex items-center space-x-2">
        <img src="src/assets/blog.png" alt="Logo" className="h-10 w-10" />
        <h1 className="text-xl font-bold font-serif  text-gray-800">BlogVibe</h1>
      </div>

      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute right-3 top-2.5 text-gray-500 w-5 h-5" />
      </div>

      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-gray-200 rounded-md flex items-center space-x-2 hover:bg-gray-300">
          <LogIn className="w-5 h-5" />
          <span>Login</span>
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center space-x-2 hover:bg-blue-700">
          <UserPlus className="w-5 h-5" />
          <span>Sign Up</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
