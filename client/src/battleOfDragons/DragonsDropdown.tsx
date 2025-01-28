import { MenuItem, Select } from "@mui/material";
import { IDragon } from "./interfaces";

interface DragonsDropdownProps {
    placeholder?: string;
    dragons: IDragon[];
    selectedDragonId: string;
    onChangeSelectedDragon: (value: string) => void;
}

export function DragonsDropdown({dragons, placeholder, selectedDragonId, onChangeSelectedDragon}: DragonsDropdownProps) {
    return <Select
        placeholder={placeholder ?? 'Select Dragon'}
        value={selectedDragonId}
        onChange={(e) => onChangeSelectedDragon(e.target.value)}
        sx={{width: 500}}
        size='small'
    >
        {dragons.map((dragon) => <MenuItem key={dragon.id} value={dragon.id}>
            {dragon.name}
        </MenuItem>)}
    </Select>
}