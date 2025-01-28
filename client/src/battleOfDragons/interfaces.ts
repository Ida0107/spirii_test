import { EDragonType } from "./enums";

export interface IDragon {
    id: string;
    name: string;
    size: number;
    type: EDragonType;
    health: number;
    createdAt: Date
}

export interface IBattleResult {
    ended: boolean;
    battleResult: Record<string, number>
}
