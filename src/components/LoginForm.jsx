import { useState } from "react";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

function LoginFormContent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setErrorMessage("Email and password are required.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, username, password);
      console.log("Login successful");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sm:w-4/5 md:w-2xl pb-3 mx-auto">
      <div className="w-full pb-2">
        <label className="block text-gray-400 text-sm font-medium">
          <span className="text-red-700">*</span> Email
        </label>
        <input
          type="text"
          placeholder="john.doe@gmail.com"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />
      </div>
      <div className="w-full pb-2">
        <label className="block text-gray-400 text-sm font-medium">
          <span className="text-red-700">*</span> Password
        </label>
        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />
      </div>
      {errorMessage && <p className="text-red-600 text-xs sm:text-sm mt-1">{errorMessage}</p>}
      <Button
        type="submit"
        color="secondary"
        variant={username && password ? "contained" : "outlined"}
        disabled={!(username && password)}
        sx={{
          width: "100%",
          marginTop: "10px",
          color: "white",
          "&.Mui-disabled": { color: "white", borderColor: "white" },
        }}
        endIcon={<Send />}
      >
        Login
      </Button>
    </form>
  );
}

export default LoginFormContent;
