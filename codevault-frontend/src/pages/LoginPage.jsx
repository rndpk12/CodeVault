import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const result = await response.text();
        console.log("Login successful:", result);
        setMessage("✅ Login successful!");
      } else {
        const err = await response.text();
        console.error("Login failed:", err);
        setMessage("❌ Login failed. Check credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ An error occurred during login.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button type="submit" style={{ marginTop: "1rem", padding: "10px", width: "100%" }}>
          Login
        </button>
      </form>
      <p style={{ marginTop: "1rem", color: "red" }}>{message}</p>
    </div>
  );
}

export default LoginPage;
