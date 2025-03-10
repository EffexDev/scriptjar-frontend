import Header from "./Header";
import LogoutButton from "./LogoutButton";
import SelectorForm from "./SelectorForm";

function NavPanel() {

    return (
        <div className="flex flex-col h-full w-full max-w-[80vw] md:max-w-sm lg:max-w-md xl:max-w-lg 
        justify-between items-center bg-white/80 text-black 
        rounded-2xl shadow-lg py-15 px-5 space-y-6">
            <Header />
            <SelectorForm />
            
            <LogoutButton />
        </div>
    );
}

export default NavPanel;