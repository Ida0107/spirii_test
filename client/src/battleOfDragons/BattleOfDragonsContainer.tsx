import { Box, useTheme } from '@mui/material';
import { useGetDragonsQuery } from './api/battleOfDragonsApi';

export function BattleOfDragons () {
	const { palette } = useTheme();

	const {data} = useGetDragonsQuery();

	return (
		<Box>
            Game to come
        </Box>
	);
};