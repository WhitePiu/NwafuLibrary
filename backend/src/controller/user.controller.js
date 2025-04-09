const UserService = require('../service/user.service');
const md5Password = require('../utils/md5-password');
const jwt = require('jsonwebtoken');

class UserController{
  async create(ctx, next) {
    // 处理user借口逻辑
    const user = ctx.request.body;
    if (!user.name || !user.password) {
      ctx.body = {
        code: 500,
        message: '用户名或密码不能为空'
      }
      return;
    }

    // 处理数据库逻辑
    const findResult = await UserService.getUserById(ctx.request.body.studentId);
    if (findResult[0].length) {
      ctx.body = {
        code: 500,
        message: '此用户已注册'
      }
      return;
    }
    const result = await UserService.save(ctx.request.body);
    ctx.body = {
      code: 200,
      message: '创建成功',
      data: result
    }
  }

  async login(ctx, next) {
    // 处理user借口逻辑
    const user = ctx.request.body;
    const userMes = await UserService.getUserById(ctx.request.body.studentId);
    const password = md5Password(user.password);

    if (userMes[0].length && userMes[0][0].password === password) {
      const token = jwt.sign(
        { id: userMes[0][0].id, studentId: userMes[0][0].studentId },
        'secret_key', // 替换为安全的密钥
        { expiresIn: '1h' }
      );
      // 设置token到cookie中
      ctx.cookies.set('token', token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000, // 1小时
        secure: false,
        sameSite: "strict" // 设置为strict，防止CSRF攻击
      });
      ctx.body = {
        code: 200,
        message: '登录成功',
        data: { user: userMes[0][0], token }
      };
    } else if (!userMes[0].length) {
      ctx.body = {
        code: 500,
        message: '用户不存在'
      };
    } else {
      ctx.body = {
        code: 500,
        message: '密码错误'
      };
    }
  }
}

module.exports = new UserController();