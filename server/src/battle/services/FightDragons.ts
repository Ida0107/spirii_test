import { IFightDragons, IFightResponse } from "../interfaces";

const MIN_HEALTH_LOSS = 0;
const MAX_HEALTH_LOSS = 0;

export class FightDragons implements IFightDragons {
    constructor() {}

    async fight(dragonOneId, dragonTwoId): Promise<IFightResponse> {
        const dragonOneHealthLoss = this.getHealthLoss();
        const dragonTwoHealthLoss = this.getHealthLoss();

        return {
            ended: false,
            battleResult: {
                [dragonOneId]: dragonOneHealthLoss,
                [dragonTwoId]: dragonTwoHealthLoss
            }
        };
    }

    private getHealthLoss () {
        return Math.floor(Math.random() * (MAX_HEALTH_LOSS - MIN_HEALTH_LOSS + 1) + MIN_HEALTH_LOSS);
    }
}
