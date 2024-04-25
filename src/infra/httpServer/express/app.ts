import express from 'express';
import { setupRouter } from './routes';

const app = express();

app.use(express.json());
app.use(setupRouter());

app.listen(3000, () => console.log('Server listening 3000'));
