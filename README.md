# Project Name
Backend Provider for Task Manager Website and Flutter App.

## Tech Stack

* **Backend:** Express.js
* **Database:** MongoDB with Mongoose ODM

---

## Prerequisites

Ensure you have the following installed:

* [Node.js](https://nodejs.org/) (v16+)
* [MongoDB](https://www.mongodb.com/) (running locally or via a connection string)

---

## Setup & Execution

### 1. Installation

Clone the repository and install the dependencies:

```bash
npm install

```

### 2. Configuration

Create a `.env` file in the root directory and add your environment variables:

```env
JWT_SECRET="SECRETKEY"

```
We use a dummy key for the sake of simplicity.

### 3. Running the Application

Since Express.js is a Node.js framework, it does not require a traditional "compilation" step like C++ or Java. You run the application using the Node runtime:

```bash
# Start the server
node index.js

```

---

## Project Structure

* `index.js`: The entry point that initializes the Express app and database connection.
* `models/`: Mongoose schemas.
* `routes/`: API endpoint definitions.
* `middleware/`: Auth Validation Middleware
* `services/`: Helper Functions for Database Interactions
* `controller/`: Request Processing Functions
* `config/`: Database Config

---
