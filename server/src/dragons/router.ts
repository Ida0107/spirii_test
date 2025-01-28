import { Router } from 'express';
import { getDragonsHandler } from './handlers/getDragonsHandler';
import { IDragonsBootstrap } from './interfaces';

export function router(dragonsBootstrap: IDragonsBootstrap): Router {
    const app = Router({ mergeParams: true });

    const {getDragons} = dragonsBootstrap;

    app.get('/', getDragonsHandler(getDragons));

    return app;
}
