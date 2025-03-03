import { useState } from "react";
import { Button } from "@mui/material";
import { Send } from "@mui/icons-material";
 
function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      console.log("Login success");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sm:w-2xl pb-3">
      <div className="w-full pb-2">
        <label className="block text-gray-400 text-sm font-medium">
          <span className="text-red-700">*</span> Email
        </label>
        <input
          type="text"
          placeholder="john.doe@gmail.com"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
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
        Log In
      </Button>
    </form>
  );
}

export default LoginForm;
