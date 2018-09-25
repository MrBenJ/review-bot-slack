import express from 'express';

const router = express.Router();

router.get('/:id', (req, res) => {
  res.send('User!!!');
});

router.post('/', (req, res) => {
  // Create a user
});

router.put('/:id', (req, res) => {
  // Edit a user
});

router.delete('/:id', (req, res) => {
  // Removes a user
});

export default router;
