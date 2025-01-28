import { EDragonType } from "../enums";

export interface IDragon {
    id: string; //ideally would be uuid
    name: string;
    size: number;
    type: EDragonType;
    createdAt: Date
}
