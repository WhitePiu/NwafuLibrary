const Router = require('@koa/router');

const BookController = require('../controller/book.controller.js');

const router = new Router({ prefix: '/books' });

router.post('/search', BookController.searchBooks);
router.post('/borrow', BookController.borrow);
router.post('/return', BookController.return);
router.post('/history', BookController.getBorrowHistory);

module.exports = router;