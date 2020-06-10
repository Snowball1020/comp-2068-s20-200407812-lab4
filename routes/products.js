const { new: _new, index, show, create, edit, update, delete: _delete } = require('../controllers/ProductsController');

module.exports = router => {
  router.get('/products/new', _new);
  router.post('/products', create);
  router.get('/products/:id', show);
};