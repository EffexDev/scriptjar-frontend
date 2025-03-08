import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

function SelectorForm() {
    const [department, setDepartment] = useState("");
    const [group, setGroup] = useState("");
    const [set, setSet] = useState("");
    const [templates, setTemplates] = useState<any[]>([]); // To store fetched templates

    const [groups, setGroups] = useState<any[]>([]); // To store groups based on selected department
    const [sets, setSets] = useState<any[]>([]); // To store sets based on selected group

    useEffect(() => {
        // Fetch groups based on selected department
        if (department) {
            fetch(`https://scriptjar-backend-production.up.railway.app/groups?departmentId=${department}`)
                .then(response => response.json())
                .then(data => setGroups(data))
                .catch(error => console.error('Error fetching groups:', error));
        }
    }, [department]);

    useEffect(() => {
        // Fetch sets based on selected group
        if (group) {
            fetch(`https://scriptjar-backend-production.up.railway.app/sets?groupId=${group}`)
                .then(response => response.json())
                .then(data => setSets(data))
                .catch(error => console.error('Error fetching sets:', error));
        }
    }, [group]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();  // Prevents the default form submission behavior
        console.log("Form Submitted");

        if (department && group && set) {
            fetchTemplates(department, group, set);
        }
    };

    async function fetchTemplates(departmentId: string, groupId: string, setId: string) {
        try {
            const response = await fetch(`https://scriptjar-backend-production.up.railway.app/templates?departmentId=${departmentId}&groupId=${groupId}&setId=${setId}`);
            const data = await response.json();
            setTemplates(data); // Store templates in state
        } catch (error) {
            console.error('Error fetching templates:', error);
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
                        <option value="67cbd98d4d0b94b7ee0bf962" className="text-black">Faults</option>
                        {/* Add more departments here */}
                    </select>
                </div>

                {/* Group Dropdown */}
                <div className="w-[100%] mb-4">
                    <label htmlFor="group" className="block text-white mb-2">Group</label>
                    <select
                        id="group"
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                        className="w-full p-2 bg-transparent border border-white text-white rounded-md focus:outline-none focus:border-white"
                        disabled={!department} // Disable until department is selected
                    >
                        <option value="" className="text-black">None</option>
                        {groups.map((g: any) => (
                            <option key={g._id} value={g._id} className="text-black">{g.name}</option>
                        ))}
                    </select>
                </div>

                {/* Set Dropdown */}
                <div className="w-[100%] mb-4">
                    <label htmlFor="set" className="block text-white mb-2">Set</label>
                    <select
                        id="set"
                        value={set}
                        onChange={(e) => setSet(e.target.value)}
                        className="w-full p-2 bg-transparent border border-white text-white rounded-md focus:outline-none focus:border-white"
                        disabled={!group} // Disable until group is selected
                    >
                        <option value="" className="text-black">None</option>
                        {sets.map((s: any) => (
                            <option key={s._id} value={s._id} className="text-black">{s.name}</option>
                        ))}
                    </select>
                </div>

                <Button type="submit" color="secondary" variant="contained" fullWidth sx={{ marginTop: 2 }}>
                    Generate
                </Button>
            </form>

            {/* Display Templates */}
            <div className="mt-4">
                {templates.length > 0 ? (
                    <ul>
                        {templates.map((template: any) => (
                            <li key={template._id}>
                                <h3>{template.template_name}</h3>
                                <p>{template.content}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No templates found</p>
                )}
            </div>
        </div>
    );
}

export default SelectorForm;
