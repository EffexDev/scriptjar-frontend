import AdminForm from "./AddAdminForm";
import RemoveAdminForm from "./RemoveAdminForm";

function AdminPanel() {
    return (
        <>
            <div className="flex flex-col h-full w-full max-w-[80vw] md:max-w-sm lg:max-w-md xl:max-w-lg 
                        justify-between items-center bg-white/80 text-black 
                        rounded-2xl shadow-lg py-15 px-5 space-y-6">
                <h1 id="title" className="text-2xl">Admin Settings</h1>
                <AdminForm />
                <RemoveAdminForm />
            </div>

        </>

    )
}

export default AdminPanel;