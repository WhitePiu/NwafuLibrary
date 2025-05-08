const jwt = require('jsonwebtoken');

// 根据用户名和密码生成token
function generateToken(studentId, password) {
  const token = jwt.sign(
    { password, studentId },
    'secret_key',
    { expiresIn: '1h' }
  );
  return token;
}

module.exports = generateToken;