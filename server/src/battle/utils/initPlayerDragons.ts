import { IDragon } from "../../dragons/interfaces/IDragon";
import { IPlayerDragon } from "../interfaces";

export function initPlayerDragons(dragons: IDragon[]): IPlayerDragon[] {
    return dragons.map(dragon => ({
        ...dragon,
        strength: 100
    }));
}
