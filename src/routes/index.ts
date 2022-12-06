import express from 'express';   
const routes = express.Router();

import images from './api/images';

routes.get('/', (req, res) => {
    res.send('<h1>Main API route!!!</h1>')    
});
routes.use('/images', images);

export default routes;