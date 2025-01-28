import { Request, Response } from "express";
import { IFightDragons } from "../interfaces";

export function fightDragonsHandler(fightDragons: IFightDragons) {
    return async (req: Request, res: Response) => {
        const { dragonOneId, dragonTwoId } = req.query;

        if(!dragonOneId || !dragonTwoId) {
            throw new Error('Please select both players');
        }

        const isSamePlayers = dragonOneId === dragonTwoId;

        if(isSamePlayers) {
            throw new Error('Please select different players');
        }

        const result = await fightDragons.fight(dragonOneId as string, dragonTwoId as string);
        return void res.json(result);
    };
}
