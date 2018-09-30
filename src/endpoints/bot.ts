import { Router, Request, Response } from 'express';
import { reply } from '../util';

const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { challenge, type } = req.body;

    if (type === 'url_verification' && challenge) {
      res.send({ challenge });
      return;
    }

    const { event } = req.body;

    console.log(event);
    if (event.text.includes('config')) {
      const { channel } = event;
      await reply("Let's config!", channel);
      res.sendStatus(200);

    }
  } catch (error) {
    console.error(error);
  }
  
});

export default router;
