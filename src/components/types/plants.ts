export interface Plant {
    name: string;
    common_names: string[];
    token: string;
    details?: {  // Making details optional
        description: string;
        best_watering: string;
        best_light_condition: string;
        best_soil_type: string;
        images: string[]; // Array of image URLs
      };
  }

  // https://plant.id/api/v3/kb/plants/:access_token?details=common_names,best_watering,best_light_condition,best_soil_type,images,description