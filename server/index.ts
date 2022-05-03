import express, {Express, Request, Response} from 'express';
import {DrugsDatabase} from './orm/drugs-database';
import cors from 'cors';

const app: Express = express();
const PORT = 8080;
const dataFile = './data/dataset.json';

const db = new DrugsDatabase(dataFile);
db.connect();

app.use(cors());

app.get('/rest/drugs/:id', (req : Request, res: Response) => {
  console.log("request received..");
  const { id } = req.params;

  try {
    res.status(200).send(db.get(id));
  } catch (err) {
    res.status(404).send({message: (err as Error).message});
  }
});

app.get('/search/drugs', (req : Request, res: Response) => {
  console.log("request received..");
  const searchTerm: string = req.query.q as string;

  try {
    res.status(200).send(db.search(searchTerm));
  } catch (err) {
    res.status(404).send({message: (err as Error).message});
  }
});

app.listen(
  PORT, 
  () => console.log(`server starting on port ${PORT}`)
);