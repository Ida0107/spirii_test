import { useState } from 'react';
import { useLazyFightDragonsQuery } from '../api/battleOfDragonsApi';

interface IUseFightDragons {
    strengthDragonOne: number,
    strengthDragonTwo: number,
    handleFightBattleClick: ({dragonOneId, dragonTwoId}: {dragonOneId: string; dragonTwoId: string}) => void;
    ended: boolean;
}

export function useFightDragons(): IUseFightDragons {
    const [fightDragons] = useLazyFightDragonsQuery();
    
    const [strengthDragonOne, setHealthDragonOne] = useState(100);
    const [strengthDragonTwo, setHealthDragonTwo] = useState(100);
    const [ended, setEnded] = useState(false);

    const handleFightBattleClick = async ({dragonOneId, dragonTwoId}: {dragonOneId: string; dragonTwoId: string}) => {
        const { data} = await fightDragons({ dragonOneId: dragonOneId as string, dragonTwoId: dragonTwoId as string });

        const {battleResult, ended} = data ?? {};

        const dragonOneResult = battleResult?.[dragonOneId] ?? 0;
        const dragonTwoResult = battleResult?.[dragonTwoId] ?? 0;

        setHealthDragonOne(dragonOneResult);
        setHealthDragonTwo(dragonTwoResult)
        setEnded(!!ended);
    }

    return {
        strengthDragonOne,
        strengthDragonTwo,
        handleFightBattleClick,
        ended
    };
}
