import express          from 'express';
import dotenv           from 'dotenv';
import cors             from 'cors';
import { PrismaClient } from '@prisma/client';
import { handleError }  from '@middleware/error.middleware';
import { authRoute }    from '@routes/auth.route';
import { selfRoute }    from '@routes/self.route';

dotenv.config();

export const app    = express();
export const port   = process.env.PORT ?? 3000;
export const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoute);
app.use('/self', selfRoute);

app.use(handleError);

app.listen(port, () => {
  console.log(`Express server is running at http://localhost:${port}`);
});
