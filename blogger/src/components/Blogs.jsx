
import PropTypes from 'prop-types';

const Blogs = ({ blogs, viewFullBlog }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg ml-64 mt-20">  
      <h2 className="text-2xl font-bold mb-6">All Blogs</h2>
      
      {blogs.length === 0 ? (
        <p className="text-gray-600">No blogs available. Start creating!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div 
              key={index} 
              className="bg-gray-100 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-gray-200 transition duration-300"
              onClick={() => viewFullBlog(blog)}  
            >
              <img 
                src={blog.image} 
                alt="Blog" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
              <p className="text-sm text-gray-600">By {blog.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.array.isRequired,  
  viewFullBlog: PropTypes.func.isRequired,  
};

export default Blogs;
