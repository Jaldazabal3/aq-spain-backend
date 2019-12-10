import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import router from './routes/routes.js';
import ApiService from './common/api.service'
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.listen(3000, () =>
  console.log('Server started on port 3000'),
);