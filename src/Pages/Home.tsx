import LoginPanel from "../Login";
import Footer from "../components/Footer";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

function Home() {
    return (
    <div>
      <FlickeringGrid className="absolute top-0 left-0 h-full w-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
/>
        <div className="flex flex-col justify-center h-screen text-white">
            <LoginPanel />
        </div>
        <Footer />
    </div>
    )
}

export default Home;