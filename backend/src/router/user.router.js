const Router = require('@koa/router');

const userController = require('../controller/user.controller');
const { handlePassword } = require('../middleware/user.middleware');

const router = new Router({ prefix: '/user' });

router.post('/register', handlePassword, userController.create);
router.post('/login', userController.login);

module.exports = router;
