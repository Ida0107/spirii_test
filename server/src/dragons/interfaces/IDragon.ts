import { EDragonType } from "../enums";

export interface IDragon {
    id: string; //ideally would be uuid
    name: string;
    size: number;
    health: number;
    type: EDragonType;
    createdAt: Date
}
