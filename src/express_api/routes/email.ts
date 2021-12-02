import express, { Router } from 'express';

const router: Router = express.Router();

router.get('/email', (req, res, next) => {
  res.render('index', { title: 'hello world' });
});

export default router;
