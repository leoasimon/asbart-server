DROP TABLE IF EXISTS projects;

CREATE TABLE project (
    "projectId" SERIAL PRIMARY KEY,
    "projectName" VARCHAR(255) NOT NULL,
    "coverUrl" TEXT
);

INSERT INTO project ("projectId", "projectName", "coverUrl")
VALUES (
    1,
    'Some flowers',
    'shorturl.at/cjM09'
);