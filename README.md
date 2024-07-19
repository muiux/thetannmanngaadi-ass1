# Node.js REST API

This is a Node.js REST API application that accepts latitude and longitude as input parameters and returns a sorted list of users within a 10-kilometer radius.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Usage](#api-usage)
- [Error Handling](#error-handling)
- [Pagination](#pagination)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- MongoDB (local installation or a cloud-hosted MongoDB service like MongoDB Atlas)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/muiux/thetannmanngaadi-ass1.git
   cd thetannmanngaadi-ass1
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up your MongoDB database:

   - If you are using a local MongoDB installation, ensure it is running.
   - If you are using MongoDB Atlas, create a new cluster and get the connection string.

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb://0.0.0.0:27017/users
   # For MongoDB Atlas, it would look something like:
   # MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/users?retryWrites=true&w=majority
   ```

## Generating Mock Data

To generate mock data for testing, run the seed script:

```bash
npm run seed
```

## Running the Application

To start the server, run the following command:

```bash
npm start
```
