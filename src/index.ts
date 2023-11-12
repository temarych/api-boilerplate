import express         from 'express';
import dotenv          from 'dotenv';
import cors            from 'cors';
import bodyParser      from 'body-parser';
import { handleError } from '@middleware/error.middleware';
import { authRoute }   from '@routes/auth.route';

dotenv.config();

export const app  = express();
export const port = process.env.PORT as string;

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoute);

app.use(handleError);

app.listen(port, () => {
  console.log(`Express server is running at http://localhost:${port}`);
});
