import express from 'express';   
const images = express.Router();

images.get('/', async (req, res) => { 
  console.log('image convert route accessed');
  res.send('image convert route 💌')
});

export default images