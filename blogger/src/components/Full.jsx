import PropTypes from 'prop-types';
import { ThumbsUp, Share2, MessageSquare } from "lucide-react";  

const Full = ({ selectedBlog, goBack }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{selectedBlog.title}</h2>
      <p className="text-sm text-gray-500 mb-2">By {selectedBlog.author}</p>
      <img src={selectedBlog.image} alt="Blog" className="w-full h-80 object-cover rounded-lg mb-4" />
      <p className="text-gray-600 leading-relaxed">{selectedBlog.content}</p>
      
      
      <button 
        onClick={goBack} 
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Back to Blogs
      </button>
      <div className="flex justify-center space-x-6 mt-6 text-gray-600">
        <button className="flex items-center space-x-2 hover:text-blue-500 cursor-pointer">
          <ThumbsUp className="w-6 h-6" />
          <span>Like</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-green-500 cursor-pointer">
          <Share2 className="w-6 h-6" />
          <span>Share</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-yellow-500 cursor-pointer">
          <MessageSquare className="w-6 h-6" />
          <span>Feedback</span>
        </button>
      </div>
    </div>
  );
};

Full.propTypes = {
  selectedBlog: PropTypes.object.isRequired,  
  goBack: PropTypes.func.isRequired,  
};

export default Full;
