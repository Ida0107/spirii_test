import express from 'express';
import bodyParser from 'body-parser';
import {config} from 'dotenv';
import {router as dragonsRouter} from './dragons/router';
import { appBootstrap } from './appBootstrap';

async function main() {
    config();
    const app = express();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.json());

    const {
        dragons
    } = appBootstrap();

    app.use('/dragons', dragonsRouter(dragons));

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log('Web service started on port' + PORT);
    });
}

main();
