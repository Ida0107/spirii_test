import { Alert, Box, Button } from "@mui/material";
import { IDragon } from "./interfaces";
import { useMemo, useState } from "react";
import { DragonsDropdown } from "./DragonsDropdown";
import { DragonProfile } from "./DragonProfile";
import { useFightDragons } from "./hooks/useFightDragons";

interface BattleOfDragonPageProps {
    dragons: IDragon[];
}

export function BattleOfDragonPage({dragons}: BattleOfDragonPageProps) {
    const [dragonOneId, setDragonOneId] = useState<string | null>(null);
    const [dragonTwoId, setDragonTwoId] = useState<string | null>(null);

    const {strengthDragonOne, strengthDragonTwo, handleFightBattleClick, ended} = useFightDragons();

    const selectedDragonOne = useMemo(() => {
        return dragonOneId ? getDragonByDragonId(dragons, dragonOneId) : null;
    }, [dragonOneId, dragons]);

    const selectedDragonTwo = useMemo(() => {
        return dragonTwoId ? getDragonByDragonId(dragons, dragonTwoId) : null;
    }, [dragonTwoId, dragons]);

    const showFightButton = dragonOneId && dragonTwoId;

    const isSamePlayers = showFightButton && (dragonOneId === dragonTwoId);

    return <Box p={4}> 
        <Box display='flex' gap={4} >
            <Box display='flex' flexDirection='column' gap={2}>
                <DragonsDropdown dragons={dragons} selectedDragonId={dragonOneId ?? ''} onChangeSelectedDragon={setDragonOneId} />
                {selectedDragonOne && <DragonProfile
                    selectedDragon={selectedDragonOne}
                    strength={strengthDragonOne}
                />}
            </Box>
            <Box width={100}>
                {showFightButton && <Button
                    variant='contained'
                    color='secondary'
                    sx={{height: 40}}
                    disabled={!!isSamePlayers || ended}
                    onClick={() => handleFightBattleClick({dragonOneId, dragonTwoId})}
                >
                    Fight
                </Button>}
            </Box>
            <Box display='flex' flexDirection='column' gap={2}>
                <DragonsDropdown dragons={dragons} selectedDragonId={dragonTwoId ?? ''} onChangeSelectedDragon={setDragonTwoId} />
                {selectedDragonTwo && <DragonProfile
                    selectedDragon={selectedDragonTwo}
                    strength={strengthDragonTwo}
                />}
            </Box>
        </Box>
        {isSamePlayers && <Alert sx={{mt: 4}} severity='error'>Choose a different second player</Alert>}
        {ended && <Alert 
                sx={{mt: 4}}
                severity='success'
            >
                {`Winner is ${strengthDragonOne > strengthDragonTwo ? selectedDragonOne?.name : selectedDragonTwo?.name }`}
            </Alert>}
    </Box>
}

function getDragonByDragonId(dragons: IDragon[], dragonId: string) {
    return dragons.find(dragon => dragon.id === dragonId);
}