
import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();
import router from './routers/portfolio.route.js';

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/portfolio', router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
app.use('/api/v1/portfolio', router);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});