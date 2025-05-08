const connection = require('../app/database');

class BookService{
  async getbooks(start, end) {

    const limit = parseInt(end - start, 10);
    const offset = parseInt(start, 10);
    const statement = `SELECT * books LIMIT ${limit} OFFSET ${offset}`;
    const result = await connection.execute(statement);
    return result;
  }
  async getTotalBooks() {
    const statement = `SELECT COUNT(*) AS total FROM books`;
    const [result] = await connection.execute(statement);
    return result[0].total; // 返回总数
  }
  async getbookdetail(id) {
    const statement = `SELECT * FROM books WHRER id = ?`;
    const result = await connection.execute(statement, [id]);
    return result;
  }
  async borrow(id, borrowDate, returnDate) {
    const borrowStatement = `UPDATE books SET returnDate = ?, borrowDate = ?, type = 1 WHERE id = ?`;
    const result = await connection.execute(borrowStatement, [returnDate, borrowDate, id]);
    return result;
  }
  async return(id) {
    const returnStatement = `UPDATE books SET returnDate = "", borrowDate = "", type = 0 WHERE id = ?`;
    const result = await connection.execute(returnStatement, [id]);
    return result;
  }
  async getBorrowHistory(studentId) {
    const statement = `SELECT * FROM BorrowHistory WHRER studentId = ?`;
    const result = await connection.execute(statement, [studentId]);
    return result;
  }

  async setBorrowHistory(id, title, catagory, author, studentId, borrowDate, returnDate) {
    const statement = `INSERT INTO BorrowHistory (id, studentId, title, catagory, author, borrowDate, returnDate) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const result = await connection.execute(statement, [id, studentId, title, catagory, author, borrowDate, returnDate]);
    return result;
  }
}

module.exports = new BookService();