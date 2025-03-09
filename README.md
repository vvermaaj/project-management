Project Management System
Overview
The Project Management System is a web-based application designed to help teams collaborate efficiently on projects. It allows users to create, manage, and track projects while assigning tasks to team members. The system supports user authentication, project invitations, and real-time chat features.

Features

✅ User Authentication – Secure login & registration using JWT.

✅ Project Creation & Management – Users can create and update projects.

✅ Task Assignment – Assign tasks to team members with deadlines.

✅ Team Collaboration – Invite users via email and manage project members.

✅ Search & Filter – Find projects based on keywords, categories, and tags.

✅ Real-time Chat – Integrated chat system for team communication.

✅ Notification System – Email-based invitations and project updates.

Tech Stack

Frontend

React.js

Redux

Tailwind CSS

Backend

Spring Boot (Java)

Spring Security (Authentication & Authorization)

MySQL (Database)

Jakarta Mail API (Email notifications)

Deployment

Docker

AWS / Heroku

Installation Guide

1. Clone the repository



git clone https://github.com/vvermaaj/project-management

cd project-management

2. Setup Backend
   
Navigate to the backend folder:

cd backend

Install dependencies & run the server:

bash

Copy

Edit

mvn clean install

mvn spring-boot:run

4. Setup Frontend
   
Navigate to the frontend folder:


cd frontend

Install dependencies & start the React app:

npm install

npm start

API Endpoints

Method	Endpoint	Description

POST	/api/auth/register	Register a new user

POST	/api/auth/login	User login

GET	/api/projects	Fetch all projects

POST	/api/projects	Create a new project

PATCH	/api/projects/{id}	Update a project

DELETE	/api/projects/{id}	Delete a project

POST	/api/projects/invite	Invite a user to a project

Contributing

Contributions are welcome! Feel free to submit a pull request or report issues.

License

This project is MIT Licensed.





![image](https://github.com/user-attachments/assets/4fceabb6-6ee3-42b7-be4f-de2aada838df)

![image](https://github.com/user-attachments/assets/476cbb02-9e30-4666-bd4d-829ea5fb7b71)

![image](https://github.com/user-attachments/assets/347d900e-42d5-47e2-9889-56b2e5b93887)

![image](https://github.com/user-attachments/assets/14badffe-bb63-4214-99c5-dd11aaec7a34)

![image](https://github.com/user-attachments/assets/f97de571-c59b-4b9f-8729-1ca2ebee55a7)

![image](https://github.com/user-attachments/assets/f754593d-9139-4eec-94b1-5c1f981d4479)

![image](https://github.com/user-attachments/assets/26a8d256-9c82-401f-b092-26c4c53e40ae)











