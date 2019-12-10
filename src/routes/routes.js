import Router from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/cities/:city', (req, res) => {
  res.send('Accessing not root');
});

export default router;