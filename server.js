
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory storage
let books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "Wings of Fire", author: "A.P.J. Abdul Kalam" }
];

// GET - Fetch all books
app.get("/books", (req, res) => {
    res.status(200).json(books);
});

// POST - Add a new book
app.post("/books", (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({
            message: "Title and author are required"
        });
    }

    const newBook = {
        id: books.length
            ? Math.max(...books.map(b => b.id)) + 1
            : 1,
        title,
        author
    };

    books.push(newBook);

    res.status(201).json({
        message: "Book added successfully",
        book: newBook
    });
});

// PUT - Update book
app.put("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const { title, author } = req.body;

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    if (!title || !author) {
        return res.status(400).json({
            message: "Title and author are required"
        });
    }

    book.title = title;
    book.author = author;

    res.status(200).json({
        message: "Book updated successfully",
        book
    });
});

// DELETE - Delete book
app.delete("/books/:id", (req, res) => {
    const id = Number(req.params.id);

    const exists = books.some(b => b.id === id);

    if (!exists) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    books = books.filter(b => b.id !== id);

    res.status(200).json({
        message: "Book deleted successfully"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
