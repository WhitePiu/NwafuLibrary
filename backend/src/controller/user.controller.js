const UserService = require('../service/user.service');
const md5Password = require('../utils/md5-password');

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
      ctx.body = {
        code: 200,
        message: '登录成功',
        data: userMes[0][0]
      }
    } else if(!userMes[0].length){
      ctx.body = {
        code: 500,
        message: '用户不存在'
      }
    } else {
      ctx.body = {
        code: 500,
        message: '密码错误'
      }
    }
  }
}

module.exports = new UserController();