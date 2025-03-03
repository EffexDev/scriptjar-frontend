import { useState } from "react";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

function SignUpFormContent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [match, setMatch] = useState(true);

  const handleConfirmChange = (e) => {
    const confirmPassword = e.target.value;
    setPasswordCheck(confirmPassword);

    if (password !== confirmPassword) {
      setMatch(false);
    } else {
      setMatch(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || password === "" || passwordCheck === "" || !match) {
      return;
    }

    const auth = getAuth(); 
    try {
      await createUserWithEmailAndPassword(auth, username, password);
      alert("Sign up success");
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
      <div className="w-full pb-2">
        <label className="block text-gray-400 text-sm font-medium">
          <span className="text-red-700">*</span> Confirm Password
        </label>
        <input
          type="password"
          placeholder="********"
          value={passwordCheck}
          onChange={handleConfirmChange}
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />
        {!match && <p className="text-red-600 text-xs sm:text-sm mt-1">Passwords do not match!</p>}
      </div>
      <Button
        type="submit"
        color="secondary"
        variant={username && password && passwordCheck && match ? "contained" : "outlined"}
        disabled={!(username && password && passwordCheck && match)}
        sx={{
          width: "100%",
          marginTop: "10px",
          color: "white",
          "&.Mui-disabled": { color: "white", borderColor: "white" },
        }}
        endIcon={<Send />}
      >
        Sign Up
      </Button>
    </form>
  );
}

export default SignUpFormContent;
