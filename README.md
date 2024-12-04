# Employee Management System

## Overview
This is an **Employee Management System** built using **React**, **Tailwind CSS**, and **LocalStorage** for data persistence. The system has two main sections:
- **Employee Panel**: Where employees can view their assigned tasks.
- **Admin Panel**: Where the admin can log in, assign tasks to employees, and view their progress.

The app is designed with a clean and responsive UI using **Tailwind CSS**, ensuring a modern and efficient user experience.

## Features
- **Login Page**: Both admin and employee have their own login credentials. 
- **Admin Panel**:
  - Admin can assign tasks to employees.
  - Admin can view all tasks assigned to employees.
- **Employee Panel**:
  - Employees can view and manage their tasks.
  - Tasks are persisted using **LocalStorage** to ensure data is retained across page reloads.
  
## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Data Persistence**: LocalStorage
- **Authentication**: Simple login (admin and employee credentials stored in the app)
  

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js and npm installed on your local machine. (Download and install from [Node.js official website](https://nodejs.org/)).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Aditya1or0/employee-management-system.git
   cd employee-management-system
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   Your app should now be running on `http://localhost:3000`.

### LocalStorage Structure
- Tasks and user credentials are saved in the browser's **LocalStorage** to persist data across page reloads.
- Admin credentials and employee information (like tasks) are hardcoded in the app. 

### Demo

- **Demo URL**: [https://employee-management-system-ot4g4j2e5.vercel.app/]

## Login Credentials

- **Admin Login**:
  - Username: `admin@me.com`
  - Password: `123`
  
- **Employee Login**:
  - Username: `employe1@me.com`
  - Password: `123`
 
## Contact
If you have any questions or suggestions, feel free to reach out to me on GitHub at Aditya1or0.

