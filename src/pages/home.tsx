import SearchBar from "../components/SearchBar";

const Home = () => {
  const handleSearch = (query: string) => {
    // search functionality
  };

  return (
    <div className="flex justify-center items-center w-full h-screen px-4 sm:px-6 md:px-8">
      <div className="w-full max-h-96 max-w-xl sm:max-w-2xl md:max-w-3xl">
      <img 
          src="../../public/images/logo.png" 
          alt="Logo" 
          className="w-32 h-auto mb-4 mx-auto" // Adjust width and margin
        />
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Home;
