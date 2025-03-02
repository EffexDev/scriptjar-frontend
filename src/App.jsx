import "./App.css"
import LoginPanel from "./Signup";
import Footer from "./Footer";

function App() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <LoginPanel />
            </div>
            <Footer />
        </div>
    );
}

export default App;
