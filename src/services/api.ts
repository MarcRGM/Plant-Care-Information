import axios from 'axios';

const API_URL = "https://plant.id/api/v3";  
const API_KEY = "cPYkGwpTQ1xcXpMgjgkgpFR0yHVQJlsyvWvtcKjNT3pAr0ghyE";

// Function to get plants based on a search term
export const getPlants = async (searchTerm: string) => {
  try {
    const response = await axios.get(`${API_URL}/plants`, {
      params: {
        search: searchTerm, 
        apiKey: API_KEY,     
      },
    });

    return response.data;  // Returns list of plants matching search)
  } catch (error) {
    console.error("Error fetching plants:", error);
    throw error;  // Throw error to be handled by the calling function/component
  }
};
