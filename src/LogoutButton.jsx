import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";

function LogoutButton() {

    const auth = getAuth();


    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log("Logged out successfully.");
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    };
    return (
        <Button variant="contained" sx={{backgroundColor: 'red'}} onClick={handleLogout}>Logout</Button>
    )
}

export default LogoutButton;