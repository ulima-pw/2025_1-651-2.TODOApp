import { useState } from "react"
import { useNavigate } from "react-router-dom"
import login from "../models/services/login"

const useLoginViewModel = () => {
    const navigate = useNavigate()
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const loginRequest = async (username: string, password: string) => {
        const data = await login({
            username : username,
            password : password
        })
        if (data.msg == "") {
            // Login correcto
            sessionStorage.setItem("USUARIO", JSON.stringify(data.usuario))
            navigate("/main")
        }else {
            // Login incorrecto
            setError(data.msg)
        }
    }

    return {
        username,
        setUsername,
        password,
        setPassword,
        error,
        setError,
        loginRequest
    }
}

export default useLoginViewModel