
import blogImage from "../assets/blogb.jpg";  

const Main = () => {
  return (
    <div className="ml-64 pt-16 px-8 flex flex-col items-center">
     
      <div className="w-full mb-6">
        <img
          src={blogImage}  
          alt="Blog"
          className="w-full h-96 object-cover rounded-lg"  
        />
      </div>

     
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Explore the Art of Blogging
        </h2>
        <p className="text-lg text-gray-600">
            Discover content that sparks curiosity, creativity, and thought. Our blog covers a wide range of exciting subjects.
        </p>
      </div>
    </div>
  );
};

export default Main;
