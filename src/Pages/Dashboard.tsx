import NavBar from "@/components/NavBar";
import Footer from "../components/Footer";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

function Dashboard() {
    return (
        <div className="h-dvh z-0">
                  <FlickeringGrid className="absolute top-0 left-0 h-full w-full"
                    squareSize={4}
                    gridGap={6}
                    color="#6B7280"
                    maxOpacity={0.2}
                    flickerChance={0.1}
            />
            <NavBar />
            <Footer />
        </div>
    )
}

export default Dashboard;