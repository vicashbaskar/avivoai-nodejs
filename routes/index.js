import express from 'express';
const routes = express.Router();

import userRoutes from '../modules/users/route.js';
userRoutes.init(routes);

export default routes;