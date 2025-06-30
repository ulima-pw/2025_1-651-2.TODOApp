import { useState } from "react"
import { useNavigate } from "react-router-dom"

const URL = "http://localhost:5000"

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    // Define (do not implement) the function to make the HTTP login request
    const loginRequest = async (username: string, password: string) => {
        const resp = await fetch(`${URL}/usuarios/login`, {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                username : username,
                password : password
            })
        })
        
        const data = await resp.json()
        if (data.msg == "") {
            // Login correcto
            sessionStorage.setItem("USUARIO", JSON.stringify(data.usuario))
            navigate("/main")
        }else {
            // Login incorrecto
            setError(data.msg)
        }
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
            {
                (() => {
                    if (error != "") {
                        return <div className="alert alert-danger">
                            { error }
                        </div>
                    }
                })()
            }
            
            <button className="btn btn-primary"
                type="button"
                onClick={() => loginRequest(username, password)}>
                Login
            </button>
        </div>
    )
}

export default LoginPage 