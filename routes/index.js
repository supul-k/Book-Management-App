const express = require('express');
const router = express.Router();

const bookRoutes = require('./book.routes');
const UserRoutes = require('./user.routes');

router.use('/books', bookRoutes);
router.use('/users', UserRoutes);

module.exports = router;