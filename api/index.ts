import express, { Express } from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { Task } from './src/tasks/tasks.entity';
import cors from 'cors';
import bodyParser from 'body-parser';
import { tasksRouter } from './src/tasks/tasks.router';
// init app
const app: Express = express();
dotenv.config();
// Parse request body
app.use(bodyParser.json());
// User CORS install types
app.use(cors());
// define port
const port = process.env.PORT;
// create db connection
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port);
    console.log('DataSource has been initialized!');
  })
  .catch((err) => {
    console.error(
      'Error during Data Source initialization',
      err,
    );
  });

app.use('/', tasksRouter);
