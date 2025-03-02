import Header from "./Header";
import SignUpForm from "./SignUpForm";

function LoginPanel() {
    return (
        <div className="flex flex-col p-5">
            <Header />
                <SignUpForm />
        </div>
    )
}

export default LoginPanel;