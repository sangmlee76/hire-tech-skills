DROP TABLE IF EXISTS profile_data;

CREATE TABLE profile_data (
  id SERIAL PRIMARY KEY,
  url VARCHAR(255),
  time_stamp TIMESTAMP,
  code_name VARCHAR(255)
);