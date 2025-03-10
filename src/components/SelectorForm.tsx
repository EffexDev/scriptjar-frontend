import React, { useState } from "react";
import { Button } from "@mui/material";

function SelectorForm() {
    const [department, setDepartment] = useState("");
    const [reason, setReason] = useState("");
    const [set, setSet] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();  // Prevents the default form submission behavior
        console.log(department);
    };

    return (
        <div className='w-full pb-3'>
            <form onSubmit={handleSubmit}>
                {/* Department Dropdown */}
                    <label htmlFor="department">Department</label>
                    <select
                        id="department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full p-2 bg-transparent border border-black text-black rounded-md focus:outline-none focus:border-black"
                    >
                        <option value="" className="text-black">None</option>
                        <option value="10" className="text-black">Ten</option>
                        <option value="20" className="text-black">Twenty</option>
                        <option value="30" className="text-black">Thirty</option>
                    </select>

                {/* Reason Dropdown */}
                    <label htmlFor="reason">Reason</label>
                    <select
                        id="reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-full p-2 bg-transparent border border-black text-black rounded-md focus:outline-none focus:border-black"
                    >
                        <option value="" className="text-black">None</option>
                        <option value="10" className="text-black">Ten</option>
                        <option value="20" className="text-black">Twenty</option>
                        <option value="30" className="text-black">Thirty</option>
                    </select>

                {/* Set Dropdown */}
                    <label htmlFor="set">Set</label>
                    <select
                        id="set"
                        value={set}
                        onChange={(e) => setSet(e.target.value)}
                        className="w-full p-2 bg-transparent border border-black text-black rounded-md focus:outline-none focus:border-black"
                    >
                        <option value="" className="text-black">None</option>
                        <option value="10" className="text-black">Ten</option>
                        <option value="20" className="text-black">Twenty</option>
                        <option value="30" className="text-black">Thirty</option>
                    </select>

                <Button onClick ={handleSubmit} color="secondary" variant="contained" fullWidth sx={{marginTop: 2}}>Generate</Button>
                </form>
        </div>
    );
}

export default SelectorForm;
