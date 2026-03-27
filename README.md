# Express TypeScript Boilerplate

A modern, robust backend boilerplate built with Express.js, TypeScript, Mongoose, and Socket.io. It comes pre-configured with essential tools and an organized directory structure to speed up your development process.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- MongoDB (local or Atlas URI)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Rename or create a `.env` file in the root directory and ensure it has the required variables (e.g., `PORT`, MongoDB URI, JWT secret, etc.).

4. **Run the Application:**

   **Development mode:** (Uses `tsx` for live-reloading)
   ```bash
   npm run dev
   ```

   **Production build:**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

This boilerplate follows a modular and scalable structure. All your application code should be written inside the `src/` directory.

### Root Directory
- `src/`: Contains all the source code of the application.
- `package.json`: Defines project dependencies and scripts.
- `tsconfig.json`: TypeScript compiler configuration.
- `.env`: Environment variables (do not commit this file).
- `logs/`: Directory where structured logs are saved.

### `src/` Directory Details

Here is a breakdown of what code should be written in which directory:

- **`config/`**
  Contains configuration files and setup logic for various services.
  *Examples:* Database connection (`mongodb.ts`), logger setup (`logger.ts`), CORS options (`http-cors.ts`), Socket.io server configuration (`socket.ts`).

- **`controllers/`**
  Contains the core business logic for handling incoming HTTP requests. Controllers process the request, interact with models or helpers, and send a response.
  *Examples:* `userController.ts`.

- **`helpers/`**
  Reusable utility functions and helper methods that can be shared across controllers, policies, or tasks.
  *Examples:* JWT signing (`sign-jwt.ts`), JWT verification (`verify-jwt.ts`).

- **`middleware/`**
  Custom generic Express middleware functions. (Note: Auth-specific middleware often goes in `policy/`, while validation goes in `validators/`).

- **`models/`**
  Database schemas and models (typically Mongoose schemas).
  *Examples:* `User.ts`.

- **`policy/`**
  Authentication and authorization middleware. This enforces security rules before allowing access to specific routes.
  *Examples:* `isAuthenticated.ts`.

- **`responses/`**
  Custom response formatters attached to the Express `res` object. Helps maintain a consistent API response structure across the application (e.g., `res.ok()`, `res.badRequest()`).
  *Examples:* `ok.ts`, `badRequest.ts`, `unauthorized.ts`.

- **`routes/`**
  Express route definitions. This is where URLs are mapped to specific controllers, policies (auth middleware), and validators.
  *Examples:* `userRouter.ts`, `index.ts`.

- **`tasks/`**
  Background jobs, cron tasks, or scheduled processes.
  *Examples:* `notificationEngine.ts` for recurring background notifications.

- **`validators/`**
  Input validation logic (using libraries like `express-validator`). Ensure request bodies, queries, and parameters are correct before they hit the controller.
  *Examples:* `user.ts` (validator rules for user-related routes).

- **`app.ts`**
  The main entry point of the backend application. It sets up the Express app, registers middlewares, connects to the database, initializes routes, and starts the server.

## Features

- **TypeScript:** Fully typed application.
- **Express 5:** Modern web framework.
- **Mongoose:** Object Data Modeling (ODM) for MongoDB.
- **Socket.io:** Real-time bi-directional communication setup included.
- **Logging:** Pre-configured Winston logger with daily log rotation.
- **JWT Authentication:** Helpers and policies for securing routes.
- **Validation:** Structure in place for `express-validator`.
- **Scheduled Tasks:** `node-cron` integrated for background jobs.
