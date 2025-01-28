import { Box, Divider, Typography, useTheme } from "@mui/material";
import { IDragon } from "./interfaces";
import { useMemo } from "react";

interface DragonProfileProps {
    selectedDragon: IDragon;
    strength: number;
}

export function DragonProfile({selectedDragon, strength}: DragonProfileProps) {    
    const dragonAttributes: Record<string, string | number> = useMemo(() => {
        const {name, type, size, health} = selectedDragon;
        return {
            name, health, strength, type, size,
        }
    }, [selectedDragon, strength]);

    return <Box display='flex' flexDirection='column' gap={2}>
        <Typography variant="h6">{selectedDragon.name}</Typography>
        {Object.keys(dragonAttributes).map(attribute => <AttributeBox
            key={attribute}
            label={attribute}
            value={dragonAttributes[attribute].toString()}
        />)}
    </Box>
}

function AttributeBox({label, value}: {label: string; value: string}) {
    const { palette } = useTheme();

    return <Box display='flex' flexDirection='column' gap={1}>
        <Typography variant="subtitle2" sx={{textTransform: 'capitalize', color: palette.secondary.light}}>{label}</Typography>
        <Typography sx={{textTransform: 'capitalize'}}>{value}</Typography>
        <Divider />
    </Box>
}