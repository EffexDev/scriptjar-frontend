import NavBar from "@/components/NavBar";
import Footer from "../components/Footer";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import SelectorForm from "@/components/SelectorForm";

function Dashboard() {
    return (
        <div className="h-dvh flex flex-col justify-center z-0">
                  <FlickeringGrid className="absolute top-0 left-0 h-full w-full"
                    squareSize={4}
                    gridGap={6}
                    color="#6B7280"
                    maxOpacity={0.2}
                    flickerChance={0.1}
            />
            <NavBar />
            <SelectorForm />
            <Footer />
        </div>
    )
}

export default Dashboard;