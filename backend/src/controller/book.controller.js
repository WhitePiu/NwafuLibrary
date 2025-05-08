const BookService = require('../service/book.service.js');

class BookController {
  async searchBooks(ctx) { 
    const { page = 1 } = ctx.query;
    const { id } = ctx.body;
    const start = (page - 1) * 10; // 每页10条数据
    const end = page * 10;
    if (id) {
      const booklist = await BookService.getbookdetail(id);
      ctx.body = {
        booklist: booklist[0][0],
      };
    } else {
      const booklist = await BookService.getbooks(start, end);
      const total = await BookService.getTotalBooks();
      ctx.body = {
        booklist: booklist[0],
        total,
      };
    }
  }

  async borrow(ctx) {
    const { id, studentId, borrowDate, returnDate } = ctx.request.body;
    await BookService.borrow(id, borrowDate, returnDate);
    const result = await BookService.getbookdetail(id);
    const book = result[0][0];
    await BookService.setBorrowHistory(id, book.title, book.category, book.author, studentId, borrowDate, returnDate);
    ctx.body = {
      code: 200,
      message: '借阅成功',
    };
  }
  async getBorrowHistory(ctx) {
    const { studentId } = ctx.request.body;
    const result = await BookService.getBorrowHistory(studentId);
    ctx.body = {
      code: 200,
      message: '借阅记录查询成功',
      booklist: result[0],
    };
  }
}

module.exports = new BookController();