import { useState } from "react"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // Define (do not implement) the function to make the HTTP login request
  const loginRequest = async (username: string, password: string) => {
    // TODO: Implement HTTP request to backend for login
  }

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" type="button" onClick={() => loginRequest(username, password)}>
        Login
      </button>
    </div>
  )
}

export default LoginPage 