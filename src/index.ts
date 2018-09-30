import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';

import UserEndpoints from './endpoints/user';
import ReviewEndpoints from './endpoints/review';
import ConfigEndpoints from './endpoints/config';
import BotEndpoints from './endpoints/bot';

const app = express();

/* Express Middleware */
app.use(bodyParser.json());
app.use(morgan('dev'));

/* Endpoint routing  */
app.use('/user', UserEndpoints);
app.use('/review', ReviewEndpoints);
app.use('/config', ConfigEndpoints);
app.use('/bot', BotEndpoints); 

const { SERVER_PORT = 3000 } = process.env

app.listen(+SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
