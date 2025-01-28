import { dragonsBootstrap } from "./dragons/boostrap";
import { IDragonsBootstrap } from "./dragons/interfaces";

export interface IAppBootstrap {
    dragons: IDragonsBootstrap;
}

export function appBootstrap(): IAppBootstrap {
    const dragons = dragonsBootstrap();

    return {
        dragons
    };
}
