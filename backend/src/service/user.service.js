const connection = require('../app/database')
const generateToken = require("../utils/generateToken")

class UserService{
  async save(user) {
    // 处理数据库操作
    const { name, password, studentId, token } = user
    const statement = `INSERT INTO user (name, password, studentId, token) VALUES (?, ?, ?, ?)`
    const result = await connection.execute(statement, [name, password, studentId, token])
    
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