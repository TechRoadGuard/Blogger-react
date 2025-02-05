import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Main from './components/Main';
import NewBlog from './components/NewBlog';
import Blogs from './components/Blogs';
import Full from './components/Full';

function App() {
  const [currentView, setCurrentView] = useState('main');  
  const [blogs, setBlogs] = useState([]); 
  const [selectedBlog, setSelectedBlog] = useState(null);  

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs'));
    if (savedBlogs) {
      setBlogs(savedBlogs);
    }
  }, []);

  const addBlog = (newBlog) => {
    const updatedBlogs = [...blogs, newBlog];  
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));  
    setCurrentView('blogs');  
  };

  const toggleCreateBlog = () => setCurrentView('newBlog');
  const goToHome = () => setCurrentView('main');
  const goToAllBlogs = () => setCurrentView('blogs');
  const viewFullBlog = (blog) => {
    setSelectedBlog(blog);
    setCurrentView('fullBlog');
  };
  const goBackToBlogs = () => setCurrentView('blogs');

  const deleteBlog = (blogToDelete) => {
    const updatedBlogs = blogs.filter(blog => blog !== blogToDelete);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setCurrentView('blogs');
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <Sidebar toggleCreateBlog={toggleCreateBlog} goToHome={goToHome} goToAllBlogs={goToAllBlogs} />
      
      <div className="flex-grow pt-16">
        {currentView === 'main' && <Main />}
        {currentView === 'newBlog' && <NewBlog addBlog={addBlog} />}
        {currentView === 'blogs' && <Blogs blogs={blogs} viewFullBlog={viewFullBlog} />}
        {currentView === 'fullBlog' && selectedBlog && <Full selectedBlog={selectedBlog} goBack={goBackToBlogs} deleteBlog={deleteBlog} />}
      </div>
    </div>
  );
}

export default App;
