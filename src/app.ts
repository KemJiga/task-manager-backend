import 'module-alias/register';
import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import prisma from '@/config/prismaConnect';

import router from '@/routers';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

const allowedOrigins = [
  'http://localhost:5173'
  // 'production url'
];

const corsOptions = {
  credentials: true,
  origin: (origin: any, callback: any) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use('/api', router);

async function bootstrap() {
  try {
    await prisma.$connect();
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log('Failed to connet to database', error);
    process.exit(1);
  }
}

bootstrap();
