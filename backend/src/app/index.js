const Koa = require('koa');
const router = require('../router/user.router.js');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const connection = require('./database');

const app = new Koa();

// 允许所有来源
app.use(bodyParser())
app.use(cors())
app.use(router.routes()).use(router.allowedMethods());

module.exports = app;