import React, { useState } from "react";
import { Button } from "@mui/material";

function SelectorForm() {
    const [department, setDepartment] = useState("");
    // const [reason, setReason] = useState("");
    // const [set, setSet] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();  // Prevents the default form submission behavior
        console.log("Form Submitted");
        const departmentNumber = Number(department);
        doubleNumber(departmentNumber);
    };

    async function doubleNumber(number: number) {
        try {
            const response = await fetch('https://scriptjar-backend-production.up.railway.app/double', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ number })
            });
    
            const data = await response.json();
            alert('Doubled number:' + data.result);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="flex flex-col w-[80vw] rounded-lg bg-gray-100/20 justify-center items-center backdrop-blur-6xl p-10 ">
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                {/* Department Dropdown */}
                <div className="w-[100%] mb-4">
                    <label htmlFor="department" className="block text-white mb-2">Department</label>
                    <select
                        id="department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full p-2 bg-transparent border border-white text-white rounded-md focus:outline-none focus:border-white"
                    >
                        <option value="" className="text-black">None</option>
                        <option value="10" className="text-black">Ten</option>
                        <option value="20" className="text-black">Twenty</option>
                        <option value="30" className="text-black">Thirty</option>
                    </select>
                </div>

                {/* Reason Dropdown
                <div className="w-[100%] mb-4">
                    <label htmlFor="reason" className="block text-white mb-2">Reason</label>
                    <select
                        id="reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="w-full p-2 bg-transparent border border-white text-white rounded-md focus:outline-none focus:border-white"
                    >
                        <option value="" className="text-black">None</option>
                        <option value="10" className="text-black">Ten</option>
                        <option value="20" className="text-black">Twenty</option>
                        <option value="30" className="text-black">Thirty</option>
                    </select>
                </div> */}

                {/* Set Dropdown */}
                {/* <div className="w-[100%] mb-4">
                    <label htmlFor="set" className="block text-white mb-2">Set</label>
                    <select
                        id="set"
                        value={set}
                        onChange={(e) => setSet(e.target.value)}
                        className="w-full p-2 bg-transparent border border-white text-white rounded-md focus:outline-none focus:border-white"
                    >
                        <option value="" className="text-black">None</option>
                        <option value="10" className="text-black">Ten</option>
                        <option value="20" className="text-black">Twenty</option>
                        <option value="30" className="text-black">Thirty</option>
                    </select>
                </div> */}

                <Button onClick ={handleSubmit} color="secondary" variant="contained" fullWidth sx={{marginTop: 2}}>Generate</Button>
                </form>
        </div>
    );
}

export default SelectorForm;
