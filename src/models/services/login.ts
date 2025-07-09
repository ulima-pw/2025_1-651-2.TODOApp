import type LoginRequestType from "../types/LoginRequestType";

const login = async (req : LoginRequestType) => {
    const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/usuarios/login`, {
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            username : req.username,
            password : req.password
        })
    })
    
    return await resp.json()
}

export default login