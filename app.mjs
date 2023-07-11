import express from 'express';
import chalk from 'chalk';
import debug from 'debug';
import morgan from 'morgan';

const logger = debug('app');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req, res) => {
    res.send("Hello Welcome...");
});

app.listen(port, ()=>{
    logger("Listening on port", chalk.blue(port));
});