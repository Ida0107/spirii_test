import { IGetDragons } from "../interfaces";

export class GetDragons implements IGetDragons {
    constructor() {}

    async get(): Promise<any> {
        return {hi: 'hi'};
    }
}
