import { IDragon } from "./IDragon";

export interface IGetDragons {
    get(): Promise<IDragon[]>;
}
