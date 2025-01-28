import { IDragon, IGetDragons } from "../interfaces";
import { dragonData } from '../../data/dragonData';

export class GetDragons implements IGetDragons {
    constructor() {}

    async get(): Promise<IDragon[]> {
        return Promise.resolve(dragonData);
    }
}
