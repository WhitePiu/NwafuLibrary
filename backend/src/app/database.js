const mysql = require('mysql2');

const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'library_db',
  connectionLimit: 5       
});

connectionPool.getConnection((err, connection) => {
  if (err) {
    console.log('数据库连接失败', err);
    return;
  }
  connection.connect((err) => {
    if (err) {
      console.log('数据库操作失败', err);
      return;
    } else {
      console.log('可以进行数据库操作')
    }
  })
})
const connection = connectionPool.promise();

module.exports = connection;