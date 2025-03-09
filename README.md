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
bash
Copy
Edit
git clone [https://github.com/your-username/projectmanagementsystem.git](https://github.com/vvermaaj/project-management)
cd projectmanagementsystem
2. Setup Backend
Navigate to the backend folder:
bash
Copy
Edit
cd backend
Install dependencies & run the server:
bash
Copy
Edit
mvn clean install
mvn spring-boot:run
3. Setup Frontend
Navigate to the frontend folder:
bash
Copy
Edit
cd frontend
Install dependencies & start the React app:
bash
Copy
Edit
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

