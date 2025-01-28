import { IBattleBootstrap } from './interfaces';
import { FightDragons } from './services/FightDragons';

export function battleBootstrap(): IBattleBootstrap {
    const fightDragons = new FightDragons();

    return {
        fightDragons
    };
}
