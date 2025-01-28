import { dragonData } from "../../data/dragonData";
import { IFightDragons, IFightResponse, IPlayerDragon } from "../interfaces";
import { initPlayerDragons } from "../utils/initPlayerDragons";

const MIN_HEALTH_LOSS = 0;
const MAX_HEALTH_LOSS = 100;

export class FightDragons implements IFightDragons {
    private playerDragons: IPlayerDragon[];

    constructor() {
        this.playerDragons = initPlayerDragons(dragonData);
    }

    async fight(dragonOneId, dragonTwoId): Promise<IFightResponse> {
        const dragonOne = this.getPlayerDragon(dragonOneId);
        const dragonTwo = this.getPlayerDragon(dragonTwoId);

        if(!dragonOne || !dragonTwo) {
            throw new Error('Dragon not found');
        }
        const dragonOneHealthLoss = this.getHealthLoss();
        const dragonTwoHealthLoss = this.getHealthLoss();

        const dragonOneRemainingStrength = dragonOne.strength - dragonOneHealthLoss;
        const dragonTwoRemainingStrength = dragonTwo.strength - dragonTwoHealthLoss;

        this.updatePlayerDragon(dragonOneId, dragonOneRemainingStrength);
        this.updatePlayerDragon(dragonTwoId, dragonOneRemainingStrength);

        return {
            ended: dragonOneRemainingStrength <= 0 || dragonTwoRemainingStrength <= 0,
            battleResult: {
                [dragonOneId]: dragonOneRemainingStrength,
                [dragonTwoId]: dragonTwoRemainingStrength
            }
        };
    }

    private getHealthLoss () {
        return Math.floor(Math.random() * (MAX_HEALTH_LOSS - MIN_HEALTH_LOSS + 1) + MIN_HEALTH_LOSS);
    }

    private getPlayerDragon(dragonId: string): IPlayerDragon {
        return this.playerDragons.find(dragon => dragon.id === dragonId);
    }

    private updatePlayerDragon(dragonId: string, updatedStrength: number) {
        this.playerDragons = this.playerDragons.map(dragon => ({
            ...dragon,
            strength: dragon.id === dragonId ? updatedStrength : dragon.strength
        }));
    }
}
