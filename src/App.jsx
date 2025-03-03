import "./App.css"
import LoginPanel from "./Login";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <div className="flex flex-col justify-center h-screen">
                <LoginPanel />
            </div>
            <Footer />
        </div>
    );
}

export default App;
