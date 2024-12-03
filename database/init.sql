CREATE DATABASE IF NOT EXISTS plant_care_db;
USE plant_care_db;
-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
-- Favorites Table
CREATE TABLE IF NOT EXISTS favorites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  api_plant_id VARCHAR(255) NOT NULL,
  -- Store API identifier for plant
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE -- relationship between the favorites table and the users table.
);
-- path = C:/Users/marcr/Desktop/XAMPP/htdocs/Plant-Care-Information/database/init.sql