import express from 'express';
import bodyParser from 'body-parser';
import {config} from 'dotenv';
import {router as dragonsRouter} from './dragons/router';
import { appBootstrap } from './appBootstrap';
import cors from 'cors';

async function main() {
    config();
    const app = express();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.json());

    const {
        dragons
    } = appBootstrap();

    const corsOptions = {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
    };

    app.use(cors(corsOptions));

    app.use('/dragons', dragonsRouter(dragons));

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log('Web service started on port' + PORT);
    });
}

main();
