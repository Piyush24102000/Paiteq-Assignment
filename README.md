# Paiteq-Assignment

## Introduction
Piyush Tale Backend Assignment 

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Piyush24102000/Paiteq-Assignment.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start` or `node server.js`

## Getting Started

Once the project is set up, you can use the following API endpoints.

## API Documentation

### GET User By Queries

- **Endpoint:** `http://localhost:5000/api/user/getUser` (Note: Page limit is set to 10)
- **Deployed Endpoint:**  `https://paiteq.vercel.app/api/user/getUser`

#### After adding Queries

- **Endpoint:** `http://localhost:5000/api/user/getUser?age=desc&page=2`
- **Deployed Endpoint:**  `https://paiteq.vercel.app/api/user/getUser?age=desc`

**Query Parameters:**

- `name: Piyush Tale`
- `age: desc`
- `page: 2`

### POST Create User

- **Endpoint:** `http://localhost:5000/api/user/createUser`
- **Deployed Endpoint:**  `https://paiteq.vercel.app/api/user/createUser`

**Body (JSON):**

```json
{
  "name": "Mr XYZ",
  "age": 51
}
