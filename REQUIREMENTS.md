# Task 1: Node.js REST API

## Objective:

Create a Node.js REST API that accepts latitude and longitude as input parameters and returns a sorted list of users within a 10-kilometer radius.

## Requirements:

**1. Setup:**

- Create a Node.js application using Express.js.
- Establish a connection to a MongoDB database to store user data with latitude and longitude fields.

**2. API Endpoint:**

- Implement a REST API endpoint that accepts latitude and longitude as query parameters.

**3. Functionality:**

- Query the database to find users within a 10-kilometer radius of the provided coordinates.
- Calculate the distance between the provided coordinates and each user's location using the Haversine formula or a similar method.
- Sort the list of users by distance in ascending order.
- Return a JSON response with the sorted list of users and their respective distances.

**4. Error Handling:**

- Implement error handling for cases where the input parameters are missing or invalid.

**5. Pagination:**

- Add pagination to the API response to limit the number of results returned at once.

## Instructions:

- Ensure clear and concise code with necessary comments.
- Prepare a README file with instructions on setting up and running the application.
