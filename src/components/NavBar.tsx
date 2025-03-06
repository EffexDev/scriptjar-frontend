import LogoutButton from "@/components/LogoutButton";
import Header from "./Header";

function NavBar() {
    return (
        <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between pt-10">
            <Header />
            <LogoutButton />
        </div>
    )
}

export default NavBar;