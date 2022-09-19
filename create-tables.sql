DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
    projectId SERIAL PRIMARY KEY,
    projectName VARCHAR(255) NOT NULL,
    coverUrl TEXT
);