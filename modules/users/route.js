import userController from './userController.js';
const userRoutes = {
  init(router) {

    router.get('/users', userController.getAll);
  }
};

export default userRoutes;
