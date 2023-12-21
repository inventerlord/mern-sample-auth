const { Router } = require('express');

const mainRouter = new Router();

// Add routes
mainRouter.get('/', (req, res) => {
  return res.json('Wellcome To Api Server');
});
// mainRouter.post('/', SessionController.store);
// mainRouter.put('/', SessionController.store);
// mainRouter.delete('/', SessionController.store);

module.exports = mainRouter;
