import { IDragonsBootstrap } from './interfaces';
import { GetDragons } from './services/GetDragons';

export function dragonsBootstrap(): IDragonsBootstrap {
    const getDragons = new GetDragons();

    return {
        getDragons
    };
}
