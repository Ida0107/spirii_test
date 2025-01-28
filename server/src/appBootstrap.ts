import { battleBootstrap } from "./battle/bootstrap";
import { IBattleBootstrap } from "./battle/interfaces";
import { dragonsBootstrap } from "./dragons/bootstrap";
import { IDragonsBootstrap } from "./dragons/interfaces";

export interface IAppBootstrap {
    dragons: IDragonsBootstrap;
    battle: IBattleBootstrap;
}

export function appBootstrap(): IAppBootstrap {
    const dragons = dragonsBootstrap();
    const battle = battleBootstrap();

    return {
        dragons,
        battle
    };
}
