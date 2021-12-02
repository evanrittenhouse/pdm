import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();
const port: number = 9000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: 'Hello World!',
  });
});

app.get('/email', (req: Request, res: Response): Response<String> => {
  return res.status(200).send({
    message: 'test',
  });
});

app.get('/');

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
