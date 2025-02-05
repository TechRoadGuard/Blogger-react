import PropTypes from 'prop-types';
import { ThumbsUp, Share2, MessageSquare } from "lucide-react";  
import { useState } from 'react';

const Full = ({ selectedBlog, goBack, deleteBlog }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{selectedBlog.title}</h2>
      <p className="text-sm text-gray-500 mb-2">By {selectedBlog.author}</p>
      <img src={selectedBlog.image} alt="Blog" className="w-full h-80 object-cover rounded-lg mb-4" />
      <p className="text-gray-600 leading-relaxed">{selectedBlog.content}</p>
      
      <div className="flex items-center space-x-4 mt-6">
        <button 
          onClick={goBack} 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back
        </button>
        <button 
          onClick={() => deleteBlog(selectedBlog)} 
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Delete
        </button>
      </div>

      <div className="flex justify-center space-x-6 mt-6 text-gray-600">
        <button 
          onClick={handleLike} 
          className="flex items-center space-x-2 cursor-pointer"
        >
          <ThumbsUp 
            className={`w-6 h-6 ${liked ? 'fill-blue-500' : 'fill-none'} hover:text-blue-500`} 
          />
          <span>{liked ? 'Liked' : 'Like'}</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-green-500 cursor-pointer">
          <Share2 className="w-6 h-6" />
          <span>Share</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-yellow-500 cursor-pointer">
          <MessageSquare className="w-6 h-6" />
          <span>Comment</span>
        </button>
      </div>
    </div>
  );
};

Full.propTypes = {
  selectedBlog: PropTypes.object.isRequired,  
  goBack: PropTypes.func.isRequired,  
  deleteBlog: PropTypes.func.isRequired,  
};

export default Full;
