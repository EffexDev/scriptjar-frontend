import { Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

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
        <div>
            <Button variant="contained" color="error" onClick={handleLogout} endIcon={<ExitToAppIcon />}>Log out</Button>
        </div>
    )
}

export default LogoutButton;