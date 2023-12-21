const { Router } = require('express');
const { register, login } = require('../controllers/authController');

const authRouter = new Router();

// Add routes
authRouter.post('/register', register);
authRouter.post('/login', login);
// authRouter.post('/', SessionController.store);
// authRouter.put('/', SessionController.store);
// authRouter.delete('/', SessionController.store);

module.exports = authRouter;
