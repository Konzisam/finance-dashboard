# Finance Dashboard - Full Stack Application
## Overview
This project is a full-stack finance dashboard designed to track and visualize a company's performance. The dashboard provides key financial insights such as revenue, expenses, profit margins, and other performance indicators. The goal was to gain hands-on experience with React, React Query, Node.js, Express, and MongoDB while also exploring real-time data fetching, and financial data visualization from a data analyst’s perspective.

### Tech Stack
**Frontend** - React & React Query
The frontend of the application is built with React, offering a dynamic and interactive UI for displaying financial data. The use of React Query allows efficient data fetching, caching, and real-time updates, ensuring that financial data remains up-to-date with minimal API calls.

### Key Aspects
* **Charting**: Implemented **Recharts** for visualizing financial performance metrics.
* **Material UI**: For creating tables and Icons (one of my favourite libraries as am not a designer)
* **State Management**: Primarily handled using React Query, reducing the need for state.
* **Responsive UI**: Designed to be fully responsive for desktop and mobile users.
* **Backend** - Express & Node.js
The backend is built using Node.js with Express.js, acting as a RESTful API that interacts with the database and serves financial data to the frontend.

### Key Features:
**REST API Development**: Built endpoints to fetch, create, update, and delete financial data.
**Data Processing**: Aggregates and formats financial metrics before sending responses to the frontend.
Authentication & Authorization: (If implemented) Used JWT (JSON Web Token) or other methods to secure API access.
**Error Handling & Validation**: Implemented key error handling and validation using middleware such as Express Validator.
MongoDB is used as the database to store financial records, transactions, and performance metrics. Since financial data can be structured in a flexible way, MongoDB's document-based format is well suited for this use case.

### Key Features:
**Schema Design**: Used Mongoose to define data models for transactions, company revenue, expenses.
**Aggregation**: Used MongoDB’s powerful aggregation framework to compute financial metrics like total revenue, profit, and trends over time.
**Cloud Deployment**: Used MongoDB Atlas for cloud-based database hosting.

