# Book Management REST API

## Project Overview
This project is a REST API developed using Node.js and Express.js to manage a list of books through CRUD operations.

## Technologies Used
- Node.js
- Express.js
- JavaScript
- Postman

## Features
- Get all books
- Add a new book
- Update an existing book
- Delete a book

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /books | Fetch all books |
| POST | /books | Add a new book |
| PUT | /books/:id | Update a book |
| DELETE | /books/:id | Delete a book |

## Installation

1. Clone the repository.
2. Install dependencies:

   npm install

3. Start the server:

   node server.js

4. Open the API:

   http://localhost:3000/books

## Testing
All API endpoints were tested using Postman.

## Data Storage
Books are stored in an in-memory JavaScript array. No database is required.

## Author
Gauri Mahadkar
