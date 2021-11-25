import express from 'express';
import routes from './routes/todos';
// import * as dotenv from "dotenv"
// dotenv.config({path: __dirname + "/.env"})
import connectDB from './db/connect';

console.log(process.env.MONGO_URI);

const app = express();

const port = 3000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);


const start = async () => {
  try {
    await connectDB(<string>process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
