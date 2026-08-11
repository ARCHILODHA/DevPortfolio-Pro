# 🚀 DevPortfolio-Pro

A full-stack developer portfolio built with **React, Spring Boot, MySQL and Bootstrap**.

DevPortfolio-Pro showcases my skills, projects, certifications and provides a functional contact system where visitors can send messages that are stored securely in MySQL.

---

## 🌐 Project Overview

DevPortfolio-Pro is a responsive full-stack portfolio application designed to present my professional profile and development work.

The application follows a modern client-server architecture:

```text
React Frontend
      ↓
Axios REST API
      ↓
Spring Boot Backend
      ↓
Spring Data JPA
      ↓
MySQL Database

✨ Features
👤 Portfolio
Professional hero section
Personal introduction
Profile image
Social media links
Resume download
Responsive navigation
💻 Skills
Dynamic skills loaded from the backend
Skill categories
Proficiency percentage
Progress bars
🚀 Projects
Projects loaded dynamically from MySQL
Project descriptions
Technology stack
GitHub repository links
Live demo links
Project images
Featured projects section
🏆 Certificates
Certificate listing
Certificate issuer
Certificate year
Dynamic backend integration
📩 Contact
Contact form
Name validation
Email validation
Subject validation
Message validation
Success/error messages
REST API integration
Messages stored in MySQL
📱 Responsive Design

The portfolio is designed to work across:

Desktop
Laptop
Tablet
Mobile
🛠️ Tech Stack
Frontend
React.js
JavaScript
React Router
Axios
Bootstrap
React Icons
React Type Animation
Vite
Backend
Java
Spring Boot
Spring Web
Spring Data JPA
Hibernate
REST APIs
Maven
Database
MySQL
MySQL Workbench
Development Tools
Visual Studio Code
Git
GitHub
Postman
📂 Project Structure
DevPortfolio-Pro/
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── api/
│   │   │   ├── api.js
│   │   │   ├── projectService.js
│   │   │   ├── skillService.js
│   │   │   ├── certificateService.js
│   │   │   ├── contactService.js
│   │   │   └── resumeService.js
│   │   │
│   │   ├── assets/
│   │   │   └── images/
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── home/
│   │   │   └── layout/
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Certificates.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── routes/
│   │   └── styles/
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   │
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/
│   │       │       └── devportfolio/
│   │       │           ├── controller/
│   │       │           ├── entity/
│   │       │           ├── repository/
│   │       │           ├── service/
│   │       │           ├── dto/
│   │       │           └── config/
│   │       │
│   │       └── resources/
│   │
│   └── pom.xml
│
├── .gitignore
├── LICENSE
└── README.md
🔌 REST API Endpoints
Projects
GET /api/projects
GET /api/projects/{id}
POST /api/projects
PUT /api/projects/{id}
DELETE /api/projects/{id}
Skills
GET /api/skills
GET /api/skills/{id}
POST /api/skills
PUT /api/skills/{id}
DELETE /api/skills/{id}
Certificates
GET /api/certificates
GET /api/certificates/{id}
POST /api/certificates
PUT /api/certificates/{id}
DELETE /api/certificates/{id}
Contact
GET /api/contact
POST /api/contact
🗄️ Database

The application uses MySQL for persistent data storage.

Main entities include:

Projects
Skills
Certificates
Contacts

The React frontend retrieves dynamic data through REST APIs exposed by the Spring Boot backend.
