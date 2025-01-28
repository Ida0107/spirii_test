import { IFightResponse } from "./IFightResponse";

export interface IFightDragons {
    fight(dragonOneId: string, dragonTwoId: string): Promise<IFightResponse>;
}
