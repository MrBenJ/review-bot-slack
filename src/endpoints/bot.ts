import { Router, Request, Response } from 'express';
import { reply } from '../util';

const router: Router = Router();

router.post('/', (req: Request, res: Response) => {
  const { challenge, type, event } = req.body;

  // For URL Verification
  if (type === 'url_verification' && challenge) {
    res.send({ challenge });
    return;
  }

  // If the message is from itself, ignore the message
  if (event.bot_id) {
    return;
  }

  console.log(event);
  if (event.text.includes('config')) {
    const { channel } = event;
    reply("Let's do this!", channel);
    res.sendStatus(200);
    return;
  }
});

export default router;
