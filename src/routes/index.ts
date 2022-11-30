import express from 'express';   
const routes = express.Router();

import images from './api/images';

routes.get('/', (req, res) => {
    res.send('main api route 🎀')    
});
routes.use('/images', images);

export default routes;