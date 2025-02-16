const md5Password = require('../utils/md5-password');

const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body;
  if (password === '') {
    await next();
    return;
  }

  ctx.request.body.password = md5Password(password);
  await next();
}

module.exports = {
  handlePassword
}