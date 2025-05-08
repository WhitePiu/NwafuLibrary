const Koa = require('koa');
const router = require('../router/user.router.js');
const bookRouter = require('../router/book.router.js');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const connection = require('./database');

const app = new Koa();
app.use(bodyParser());
app.use(cors({
  origin: '*', // 允许所有来源
  credentials: true, // 允许携带凭证 
}));

app.use(async (ctx, next) => {
  if (!ctx.url.startsWith.includes('login') && !ctx.url.includes('register')) { 
    const token = ctx.get('Authorization')?.split(' ')[1]; // 获取请求头中的token
    if (!token) {
      ctx.status = 401; // 未授权
      ctx.body = { message: 'Unauthorized: Token is missing' };
    }

    try {
      const isValid = JsonWebTokenError.verify(token, "secret_key"); // 验证token
      if (!isValid) {
        ctx.status = 401; // 未授权
        ctx.body = { message: 'Unauthorized: Token is invalid or expired' };
      }
    } catch (error) {
      ctx.status = 401; // 未授权
      ctx.body = { message: 'Unauthorized: Invalid token' };
    }
  }
});
// 允许所有来源
app.use(router.routes()).use(router.allowedMethods());
app.use(bookRouter.routes()).use(bookRouter.allowedMethods());

module.exports = app;