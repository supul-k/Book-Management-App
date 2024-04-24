const Book = require("../models/book");

class BookController {
  async createBook(req, res) {
    const { title, author } = req.body;

    try {
      const book = await Book.create({ title, author });
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getBooks(req, res) {
    try {
      const books = await Book.findAll();
      res.status(200).json(books);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getBook(req, res) {
    const { id } = req.params;

    try {
      const book = await Book.findByPk(id);
      res.status(200).json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateBook(req, res) {
    const { id } = req.params;
    const { title, author } = req.body;

    try {
      const book = await Book.findByPk(id);
      book.title = title;
      book.author = author;
      await book.save();
      res.status(200).json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteBook(req, res) {
    const { id } = req.params;

    try {
      const book = await Book.findByPk(id);
      await book.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new BookController();
