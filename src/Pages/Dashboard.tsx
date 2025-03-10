import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import NavPanel from "@/components/NavPanel";
import AdminPanel from "@/components/AdminPanel";
import { useAuth } from "@/config/AuthContext";

function Dashboard() {

    const { isAdmin } = useAuth();

    return (
        <>
        <div className="flex flex-wrap p-10 h-dvh  z-0">
                  <FlickeringGrid className="absolute top-0 left-0 h-full w-full"
                    squareSize={4}
                    gridGap={6}
                    color="#6B7280"
                    maxOpacity={0.2}
                    flickerChance={0.1}
            />
            <div className="flex flex-col z-10 max-w-80">
                <NavPanel />
                <div className="py-3">
                    {isAdmin && <AdminPanel />}
                </div>
            </div>

        </div>
        </>
    )
}

export default Dashboard;