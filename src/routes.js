const routes = require('express').Router();
const Controller = require('./Controller');

routes.get('/',Controller.index);

routes.get('/:id',Controller.show)

routes.post('/',Controller.store)

routes.delete('/',Controller.delete)

routes.put('/',Controller.update)


module.exports = routes;