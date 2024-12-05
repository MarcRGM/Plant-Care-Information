import React from 'react';
import { Plant } from './types/plants';
import { Droplets } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return ( 
    <div className={"bg-[#EEEEEE] rounded-lg outline-none hover:ring-4 hover:ring-[#E6FF94] shadow-md overflow-hidden transition-transform transform duration-300 hover:shadow-2xl hover:scale-105 hover:bg-[#FFFFFF]"}>
      <div className="relative h-28">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#425F57] p-4">
          <h3 className="text-[#EEEEEE] font-semibold text-lg sm:text-xl lg:text-2xl">{plant.name}</h3>
          <p className="text-[#A8E890] text-sm sm:text-base lg:text-lg">
            {plant.common_names || 'No common name'}
          </p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1">
            <Droplets className="w-4 h-4 text-blue-500" />
            <span className="font-semibold text-sm text-[#425F57]">
              Water: {plant.watering.min}-{plant.watering.max}x
            </span>
          </div>
        </div>
        <p className="text-sm font-semibold text-[#425F57]">
          {plant.description.value}.
        </p>
      </div>
    </div>
  );
};

export default PlantCard;