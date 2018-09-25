import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {

});

router.get('/', (req, res) => {
  res.send('review endpoint');
});

export default router;