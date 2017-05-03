
-- CREATE SQL DATABASE CALLED auto_emailer

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	displayName VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	photo VARCHAR(2000) NOT NULL,
	sql_id VARCHAR(2000) NOT NULL
);

	INSERT INTO users (id, displayName, email, photo)
	VALUES (1, 'yourName', 'yourEmailAddress@gmail.com', 'https://www.addressGoesHere.com/');

CREATE TABLE companies (
	id SERIAL PRIMARY KEY,
	companyName VARCHAR(100) NOT NULL,
	contactFirstName VARCHAR(100) NOT NULL,
	contactLastName VARCHAR(100) NOT NULL,
	contactEmail VARCHAR(100) NOT NULL,
	contactDate VARCHAR(80) NOT NULL,
	note VARCHAR(5000),
	active boolean DEFAULT true,
	users_id integer REFERENCES users (id)
);

	INSERT INTO companies (id, companyName, contactFirstName, contactLastName, contactEmail, contactDate, note, active, users_id)
	VALUES (1, 'Prime', 'Jon', 'Doe', 'example@gmail.com', '01/01/17', 'Notes display here!!!', 'true', 1);
