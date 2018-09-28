import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/:id', (req: Request, res: Response) => {
  // Get a user by their id
});

router.post('/', (req: Request, res: Response) => {
  // Create a user
});

router.put('/:id', (req: Request, res: Response) => {
  // Edit a user
});

router.delete('/:id', (req: Request, res: Response) => {
  // Removes a user
});

export default router;
