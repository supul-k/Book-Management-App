const express = require('express');
const router = express.Router();
const BookController = require('../controllers/books.controller');
const jwtAuth = require('../middlewares/jwtAuth');

router.post('/', jwtAuth.jwtAuth , BookController.createBook);
router.get('/', jwtAuth.jwtAuth, BookController.getBooks);
router.get('/:id', jwtAuth.jwtAuth, BookController.getBook);
router.put('/:id', jwtAuth.jwtAuth, BookController.updateBook);
router.delete('/:id', jwtAuth.jwtAuth, BookController.deleteBook);

module.exports = router;