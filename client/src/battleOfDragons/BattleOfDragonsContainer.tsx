import { Alert, Box } from '@mui/material';
import { useGetDragonsQuery } from './api/battleOfDragonsApi';
import { BattleOfDragonPage } from './BattleOfDragonPage';

export function BattleOfDragons () {
	const {data: dragons = [], isFetching, isLoading, isError} = useGetDragonsQuery();

	if(isLoading || isFetching) {
		return <Box>Loading...</Box>
	}

	if(isError) {
		return <Alert severity='error'>Something went wrong</Alert>
	}

	return (
		<Box>
            {dragons && <BattleOfDragonPage dragons={dragons}/>}
        </Box>
	);
};