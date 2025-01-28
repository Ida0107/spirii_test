import express from 'express';
import { Express, Request, RequestHandler, Response, Router } from 'express';
import bodyParser from 'body-parser';

type RequestType = Request & { log: () => void };
type ResponseType = Response & { log: () => void };

export function createBaseApp(path: string, handler: RequestHandler | Router): Express {
    const app = express();

    app.use(bodyParser.json());

    app.use((req, res, next) => {
        (req as RequestType).log = (res as ResponseType).log = () => {};
        return next();
    });

    app.use(path, handler);

    return app;
}
