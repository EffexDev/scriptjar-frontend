import GenerateButton from "./GenerateButton";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function SelectorForm() {
    return (
        <div className="rounded-lg bg-gray-100/20 backdrop-blur-6xl p-10 text-white">
            <FormControl sx={{ m: 1, minWidth: 120, color: "white" }} size="small">
            <InputLabel id="demo-select-small-label">Age</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="Age"
                    
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <GenerateButton />
        </div>
    )
}

export default SelectorForm;