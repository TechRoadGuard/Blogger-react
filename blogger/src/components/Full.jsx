import PropTypes from 'prop-types';
import { ThumbsUp, Share2, MessageSquare } from "lucide-react";  
import { useState, useEffect } from 'react';

const Full = ({ selectedBlog, goBack, deleteBlog }) => {
  const [liked, setLiked] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);

  // Fetch comments specific to the current blog using the blog's ID
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(`comments-${selectedBlog.id}`)) || [];
    setComments(storedComments);
  }, [selectedBlog.id]);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleCommentToggle = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      // Save the new comment to localStorage under a key specific to this blog
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);

      // Store the updated list of comments in localStorage using the blog's ID
      localStorage.setItem(`comments-${selectedBlog.id}`, JSON.stringify(updatedComments));

      setNewComment(''); // Clear input after submission
    }
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
        <button 
          onClick={handleCommentToggle}
          className="flex items-center space-x-2 hover:text-yellow-500 cursor-pointer"
        >
          <MessageSquare className="w-6 h-6" />
          <span>Comment</span>
        </button>
      </div>

      {/* Show comment input if showCommentInput is true */}
      {showCommentInput && (
        <div className="mt-4">
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Write your comment..."
            className="w-full p-2 border rounded-lg"
            rows="4"
          />
          <button 
            onClick={handleCommentSubmit}
            className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Submit Comment
          </button>
        </div>
      )}

      {/* Display comments for the current blog */}
      <div className="mt-6">
        {comments.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Comments</h3>
            <ul className="space-y-2">
              {comments.map((comment, index) => (
                <li key={index} className="p-2 border-b">{comment}</li>
              ))}
            </ul>
          </div>
        )}
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
