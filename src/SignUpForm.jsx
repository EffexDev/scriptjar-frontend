import { useState } from "react";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";

function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [match, setMatch] = useState(true);  // Initially assuming passwords match

    // Handle changes in the Confirm Password field and check if they match
    const handleConfirmChange = (e) => {
        setConfirm(e.target.value);  // Update confirm password value

        // Directly check if password and confirm match
        if (password !== confirm) {
            setMatch(false);  // Set match to false if passwords don't match
        } else {
            setMatch(true);  // Set match to true if passwords match
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (match) {
            console.log(email, password);
            // Handle form submission logic here
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full">
                <div className="w-full pb-2">
                    <label className="block text-gray-400 text-sm font-medium">
                        <span className="text-red-700">*</span> Email
                    </label>
                    <input
                        type="text"
                        placeholder="john.doe@team.aussiebroadband.com.au"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="w-full pb-2">
                    <label className="block text-gray-400 text-sm font-medium">
                        <span className="text-red-700">*</span> Password
                    </label>
                    <input
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="w-full pb-2">
                    <label className="block text-gray-400 text-sm font-medium">
                        <span className="text-red-700">*</span> Confirm Password
                    </label>
                    <input
                        type="password"
                        placeholder="********"
                        value={confirm}
                        onChange={handleConfirmChange}  // Call the updated function on change
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {/* Show error if passwords do not match */}
                    {!match && (
                        <p className="text-red-600">Passwords do not match!</p>
                    )}
                </div>
                <Button
                    type="submit"
                    variant={match ? "contained" : "outlined"}  // Conditionally set variant
                    sx={{ width: "100%", marginTop: "10px" }}
                    endIcon={<Send />}
                    disabled={!match}  // Disable button if passwords don't match
                >
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default SignUpForm;
