import PropTypes from 'prop-types';  
import { Home, Folder, Heart, Edit } from "lucide-react";

const Sidebar = ({ toggleCreateBlog, goToHome, goToAllBlogs }) => {
  return (
    <div className="w-64 h-screen fixed left-0 top-16 bg-gray-800 text-white p-5">
      <h2 className="text-2xl font-bold text-center text-blue-500 mb-8">My Blog</h2>
      <ul className="space-y-6">
        
        <li
          onClick={goToHome} 
          className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer"
        >
          <Home className="w-5 h-5 text-gray-400" />
          <span>Home</span>
        </li>

        
        <li
          onClick={goToAllBlogs}  
          className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer"
        >
          <Folder className="w-5 h-5 text-gray-400" />
          <span>All Blogs</span>
        </li>

        
        <li
          onClick={toggleCreateBlog}  
          className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer"
        >
          <Edit className="w-5 h-5 text-gray-400" />
          <span>Create Blog</span>
        </li>

        {/* Categories */}
        <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <Folder className="w-5 h-5 text-gray-400" />
          <span>Categories</span>
        </li>

        {/* Favorites */}
        <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <Heart className="w-5 h-5 text-gray-400" />
          <span>Favorites</span>
        </li>
      </ul>
    </div>
  );
};


Sidebar.propTypes = {
  toggleCreateBlog: PropTypes.func.isRequired,  
  goToHome: PropTypes.func.isRequired,  
  goToAllBlogs: PropTypes.func.isRequired,  
};

export default Sidebar;
