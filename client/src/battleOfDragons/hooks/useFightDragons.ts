import { useState } from 'react';
import { useLazyFightDragonsQuery } from '../api/battleOfDragonsApi';

interface IUseFightDragons {
    strengthDragonOne: number,
    strengthDragonTwo: number,
    handleFightBattleClick: ({dragonOneId, dragonTwoId}: {dragonOneId: string; dragonTwoId: string}) => void;
}

export function useFightDragons(): IUseFightDragons {
    const [fightDragons] = useLazyFightDragonsQuery();
    
    const [strengthDragonOne, setHealthDragonOne] = useState(100);
    const [strengthDragonTwo, setHealthDragonTwo] = useState(100);

    const handleFightBattleClick = async ({dragonOneId, dragonTwoId}: {dragonOneId: string; dragonTwoId: string}) => {
        const { data } = await fightDragons({ dragonOneId: dragonOneId as string, dragonTwoId: dragonTwoId as string });
        setHealthDragonOne(data?.battleResult[dragonOneId] ?? 0);
        setHealthDragonTwo(data?.battleResult[dragonTwoId] ?? 0)
    }

    return {
        strengthDragonOne,
        strengthDragonTwo,
        handleFightBattleClick
    };
}
