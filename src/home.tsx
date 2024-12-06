import SearchBar from "./components/SearchBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate


  const handleSearch = async (query: string) => {
    if (!query.trim()) return; // Ignore empty or whitespace-only searches

    const myHeaders: Headers = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Api-Key",
      "bBAOzvPGOsKu50eglxrFnr9z2bb3QyJ2PYU958wjDiiK7cOMyl"
    );

    const requestOptions: RequestInit = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `https://plant.id/api/v3/kb/plants/name_search?q=${encodeURIComponent(
          query
        )}`,
        requestOptions  
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

       // Navigate to the /search-result page and pass the result as state
       navigate("/results", { state: { plants: result} });
     } catch (error: any) {
       console.error("Error:", error);
     }
};

  return (
    <div className="flex justify-center items-center w-full h-screen px-4 sm:px-6 md:px-8">
      <div className="w-full h-screen flex flex-col max-h-96 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
        <div className="flex items-center">
          <img 
              src="../../public/images/logo.png" 
              alt="Logo" 
              className="w-32 px-2 sm:px-2 md:px-4 lg:px-6 sm:w-48 md:w-56 lg:w-64 h-auto mb-4" 
          />
          <div className="">
            <p className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#425F57]">Welcome to</p>
            <span className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#425F57]">Water-Down</span>
            <p className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#425F57]">Plant-care Information Website</p>
          </div>
        </div>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Home;
