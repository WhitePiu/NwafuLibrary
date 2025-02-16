const connection = require('../app/database')

class UserService{
  async save(user) {
    // 处理数据库操作
    const { name, password, studentId } = user
    const statement = `INSERT INTO user (name, password, studentId) VALUES (?, ?, ?)`
    const result = await connection.execute(statement, [name, password, studentId])
    
    return result;
  }

  async getUserByName(name) {
    const statement = `SELECT * FROM user WHERE name = ?`
    const result = await connection.execute(statement, [name])
    return result;
  }

  async getUserById(id) {
    const statement = `SELECT * FROM user WHERE studentId = ?`
    const result = await connection.execute(statement, [id])
    return result;
  }

}

module.exports = new UserService();