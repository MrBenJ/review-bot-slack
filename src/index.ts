import express from 'express';
import bodyParser from 'body-parser';

import UserEndpoints from './endpoints/user';
import ReviewEndpoints from './endpoints/review';
import ConfigEndpoints from './endpoints/config';
const app = express();

app.use(bodyParser.json());
app.use('/user', UserEndpoints);
app.use('/review', ReviewEndpoints);
app.use('/config', ConfigEndpoints);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
