import express from 'express';
import bodyParser from 'body-parser';

import UserEndpoints from './endpoints/user';
import ReviewEndpoints from './endpoints/review';

const app = express();

app.use(bodyParser.json());
app.use('/user', UserEndpoints);
app.use('/review', ReviewEndpoints);

app.get('/', (req, res) => {
   res.send('hello world');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
