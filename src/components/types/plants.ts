export interface Plant {
  name: string;
  common_names: string[];
  description: {
    value: string;
  };
  watering: {
    max: number;
    min: number;
  };
  entity_id: string;
}
