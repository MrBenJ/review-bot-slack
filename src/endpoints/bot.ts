import { Router, Request, Response } from 'express';
import { reply } from '../util';

const router: Router = Router();

type SlackEvent = {
  bot_id?: string,
  type: string,
  channel: string,
  user: string,
  text: string
};

type SlackPayload = {
  challenge?: string,
  type?: string,
  event: SlackEvent
};

router.post('/', (req: Request, res: Response) => {
  const { challenge, type, event } = req.body;
  const { bot_id, channel, user, text } = event;
  
  switch(true) {

    // URL Verification on Slack
    case (type === 'url_verification' && challenge): {
      res.send({ challenge });
      return;
    }
    // say nothing if it's the bot talking
    case (Boolean(bot_id)): {
      return;
    }

    // Configure the bot
    case (text.includes('config')): {
      reply("Great! Enter your Github username starting with the `@` character:", channel);
      res.sendStatus(200);
      return;  
    }

    // Github username was entered
    case (text.startsWith('@')): {
      // Hit the database and store the username and github name
      const username: string = text.slice(1).trim();
      reply(`Got it. Your Github username is: ${username}`, channel);
      res.sendStatus(200);
      return;  
    }

    default: {
      console.log(event);
      reply('Sorry, I do not understand how to repond to that :(', channel);
      return;
    }
  }
});

export default router;
