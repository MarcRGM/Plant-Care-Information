import { useState } from 'react';
import { Plant } from './types/plants';
import { Heart } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const [plantDetails, setPlantDetails] = useState<any>(null);

  const fetchPlantDetails = async () => {
    const apiUrl = `https://plant.id/api/v3/kb/plants/${plant.token}?details=common_names,best_watering,best_light_condition,best_soil_type,images,description`;

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Api-Key", "bBAOzvPGOsKu50eglxrFnr9z2bb3QyJ2PYU958wjDiiK7cOMyl");

    const response = await fetch(apiUrl, { method: "GET", headers });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    setPlantDetails(data); // Store the plant details in the state
  };

  return (
    <div className="bg-[#EEEEEE] rounded-lg outline-none shadow-sm overflow-hidden transition-transform transform duration-300 hover:shadow-2xl hover:scale-105 hover:bg-[#FFFFFF]">
      <div className="relative h-28">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#425F57] p-4">
          <h3 className="text-[#EEEEEE] font-semibold text-lg sm:text-xl lg:text-2xl">{plant.name}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="flex justify-between text-sm font-semibold text-[#425F57]">
          <button className="text-lg" onClick={fetchPlantDetails}>Description</button>
          <button><Heart /></button>
        </p>
      </div>
    </div>
  );
};

export default PlantCard;
