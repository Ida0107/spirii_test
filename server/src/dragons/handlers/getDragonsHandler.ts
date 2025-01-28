import { Request, Response } from "express";
import { IGetDragons } from "../interfaces";

export function getDragonsHandler(getDragons: IGetDragons) {
    return async (req: Request, res: Response) => {
        const result = await getDragons.get();
        return void res.json(result);
    };
}
