
import  { useState } from 'react';
import PropTypes from 'prop-types'; 

const NewBlog = ({ addBlog }) => {
  const [blogTitle, setBlogTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null);  
  const [content, setContent] = useState('');


  const handleImageChange = (e) => {
    const file = e.target.files[0];  
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);  
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!blogTitle || !author || !image || !content) return;  

    const newBlog = { title: blogTitle, author, image, content };
    addBlog(newBlog); 
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Blog</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Blog Title" 
          className="w-full p-2 border rounded"
          value={blogTitle} 
          onChange={(e) => setBlogTitle(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Author Name" 
          className="w-full p-2 border rounded"
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          required 
        />
        
      
        <input 
          type="file" 
          className="w-full p-2 border rounded"
          accept="image/*"  
          onChange={handleImageChange} 
          required 
        />
        
        
        {image && <img src={image} alt="Preview" className="w-32 h-32 object-cover mt-4" />}

        <textarea 
          placeholder="Blog Content" 
          className="w-full p-2 border rounded" 
          rows="6"
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required
        ></textarea>

        <button 
          type="submit" 
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};


NewBlog.propTypes = {
  addBlog: PropTypes.func.isRequired,  
};

export default NewBlog;
