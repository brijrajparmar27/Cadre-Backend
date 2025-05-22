# Cadre Backend

Cadre is a comprehensive project management system designed to streamline team collaboration, project tracking, and communication. This repository contains the backend module, built with Node.js and Express, providing a robust API for the Cadre frontend application.

> **Note:** This is the backend part of the project. The frontend is available at [Cadre Frontend](https://github.com/brijrajparmar27/Cadre-Frontend).

## Features

- **User Authentication & Authorization**

  - Secure user registration and login
  - Role-based access control
  - JWT-based authentication

- **Project Management**

  - Create and manage projects
  - Track project progress
  - Assign team members
  - Project status updates

- **Task Management**

  - Create and assign tasks
  - Track task status
  - Set deadlines and priorities
  - Task comments and updates

- **Timesheet Management**

  - Log work hours
  - Track project contributions
  - Generate timesheet reports

- **Real-time Communication**

  - Real-time chat functionality using Socket.io
  - Group and direct messaging
  - Typing indicators
  - Message history

- **Email Notifications**
  - Automated email notifications
  - Project updates
  - Task assignments
  - Important announcements

## Tech Stack

- **Runtime Environment**: Node.js
- **Web Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Real-time Communication**: Socket.io
- **File Upload**: Multer
- **Email Service**: Nodemailer
- **Security**: bcrypt for password hashing
- **CORS Support**: Built-in CORS middleware

## Project Structure

```
├── Controller/         # Business logic and request handlers
├── Model/             # Database models and schemas
├── Router/            # API route definitions
├── Middleware/        # Custom middleware functions
├── Multer/           # File upload configuration
├── public/           # Static files and uploads
├── index.js          # Application entry point
└── Router.js         # Main router configuration
```

## API Endpoints

The API is organized into several main routes:

- `/api/users` - User management
- `/api/projects` - Project operations
- `/api/tasks` - Task management
- `/api/timesheets` - Timesheet operations
- `/api/chat` - Chat functionality
- `/api/messages` - Message handling
- `/api/stack` - Technology stack management

## Setup & Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/brijrajparmar27/Cadre-Backend.git
   cd Cadre-Backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory with the following variables:

   ```
   PORT=5000
   MONGO=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## Database Models

- **User**: User profiles and authentication
- **Project**: Project details and management
- **Task**: Task tracking and assignments
- **Timesheet**: Work hour logging
- **Chat**: Chat room management
- **Message**: Individual messages
- **Stack**: Technology stack definitions

## Real-time Features

The application uses Socket.io for real-time features:

- Real-time chat
- Typing indicators
- Message notifications
- Online status updates

## Security Features

- Password hashing with bcrypt
- JWT-based authentication
- CORS protection
- Secure file uploads
- Input validation and sanitization

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Contact

For any queries or support, please open an issue in the repository.
