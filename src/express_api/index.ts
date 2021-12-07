import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { EmailApiGetResponseProps, FormInputProps } from '../frontend/components/contact_modal';
import * as nodemailer from 'nodemailer';

const app: Application = express();
const port: number = 9000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(require('body-parser').urlencoded({ extended: false }));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: 'Hello World!',
  });
});

app.get('/email', (req: Request, res: Response): Response<String> => {
  try {
    return res.status(200).send({
      message: 'test from get request',
    });
  } catch (error: any) {
    return res.status(500).send({
      message: 'internal server error',
    });
  }
});

app.post('/sendEmail', async (req: Request, res: Response) => {
  const formInput: FormInputProps = req.body;

  const emailSubject: string = `New Business - ${formInput.subjectCompany}`;
  const returnName: string = formInput.returnName;
  const returnAddress: string = formInput.returnAddress;
  const useCase: string = formInput.useCase;

  const transporter: nodemailer.Transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'pdm.new.business@gmail.com',
      pass: '6bG;v~B5YN-X>GGT',
    },
  });

  //   const messageBody: string = `
  //     Sender name: ${returnName}\n
  //     Return address: ${returnAddress}\n
  //     Use case/business request: ${useCase}
  //   `;

  //   const messageInfo: Promise<any> = transporter.sendMail({
  //     from: 'New Business Request',
  //     to: 'evanrittenhouse@gmail.com', // info@pdm-inc.com for PDM forwarder (john_beaulieu@pdm-inc.com)
  //     subject: emailSubject,
  //     text: messageBody,
  //   });

  // console.log(messageInfo);

  return res.status(200).send({ sent: true, message: 'success' });
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occured: ${error.message}`);
}
