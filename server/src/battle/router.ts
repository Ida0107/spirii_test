import { Router } from 'express';
import { IBattleBootstrap } from './interfaces';
import { fightDragonsHandler } from './handlers/fightDragonsHandler';

export function router(battleBootstrap: IBattleBootstrap): Router {
    const app = Router({ mergeParams: true });

    const {fightDragons} = battleBootstrap;

    app.get('/fight-dragons', fightDragonsHandler(fightDragons));

    return app;
}
