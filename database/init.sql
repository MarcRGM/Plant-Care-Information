CREATE DATABASE IF NOT EXISTS plant_care;
USE plant_care;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- Favorites Table(no plant_id)
CREATE TABLE IF NOT EXISTS favorites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  api_plant_id VARCHAR(255) NOT NULL,  -- Store API identifier for plant
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- relationship between the favorites table and the users table.
);

-- C:/Users/marcr/Desktop/XAMPP/htdocs/Plant-Care-Information/database/init.sql