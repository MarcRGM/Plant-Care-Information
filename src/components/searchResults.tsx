import { useLocation, Navigate } from 'react-router-dom';
import PlantCard from './plantCard';
import { Plant } from './types/plants';

interface Entity {
  matched_in: string;
  matched_in_type: string;
  access_token: string;
  entity_name: string;
  description: {
    value: string;
  }
}

const SearchResults = () => {
  const location = useLocation();
  const { plants } = location.state || { plants: { entities: [] } };

  // Ensure plants.entities is an array
  const plantsArray = Array.isArray(plants.entities) ? plants.entities : [];

  // Accessing /search directly without any plants data, redirect to home
  if (!location.state || plantsArray.length === 0) {
    return <Navigate to="/" replace />;
  }

  // Transform the plant data into the structure expected by PlantCard
  const transformedPlants: Plant[] = plantsArray.map((item: Entity) => {
    console.log(item);  // Log to check the structure of the item object
  
    return {
      name: item.entity_name,
      common_names: [item.matched_in],
      description: {
        value: item.description?.value || "Description",
      },
      watering: {
        max: 2, // Default watering values
        min: 1,
      },
      entity_id: item.access_token,
    };
  });

  return (
    <div className="min-h-screen flex items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full mt-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {transformedPlants.map((plant: Plant) => (
            <PlantCard key={plant.name} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
