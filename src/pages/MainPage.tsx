import { useEffect, useState } from "react"
import Formulario from "../components/Formulario"
import ListaTODOs, { type TODO } from "../components/ListaTODOs"
import Navegacion, { Pagina } from "../components/Navegacion"
import Titulo from "../components/Titulo"
import { useNavigate } from "react-router-dom"

const URL = "http://localhost:5000"

export interface Category {
    id: number
    name: string
}

const MainPage = () => {
    const [listaTODOs, setListaTODOs  ] = useState<TODO[]>([])
    const [categories, setCategories] = useState<Category[]>([])

    const navigate = useNavigate()

    const httpObtenerTODOsAsyncAwait = async () => {
        if (!sessionStorage.getItem("USUARIO")) {
            navigate("/")
            return
        }

        const usuario = JSON.parse(sessionStorage.getItem("USUARIO")!)
        try {
            const resp = await fetch(`${URL}/todos`,{
                headers : {
                    "usuarioid" : usuario.id
                }
            })
            const data = await resp.json()
            setListaTODOs(data)
        }catch(error) {
            console.error(error)
        }
    }

    const httpObtenerCategoriasAsyncAwait = async () => {
        try {
            const resp = await fetch(`${URL}/categories`)
            const data = await resp.json()
            setCategories(data)
        }catch(error) {
            console.error(error)
        }
    }

    const httpGuardarTODO = async (todo : TODO) => {
        const resp = await fetch(`${URL}/todos`, {
            method : "post",
            body : JSON.stringify(todo),
            headers : {
                "content-type" : "application/json"
            }
        })
        const data = await resp.json()
    }

    useEffect(() => {
        httpObtenerTODOsAsyncAwait()
        //httpObtenerCategoriasAsyncAwait()
    }, [])

    const agregarTODO = async (texto : string) => {
        await httpGuardarTODO({
            descripcion : texto
        })
        await httpObtenerTODOsAsyncAwait()
    }

    return <div className="container">
        <Titulo texto="TODO App" pagina={ Pagina.Main }/>
        <Navegacion pagina={ Pagina.Main } />
        <Formulario agregar={ agregarTODO } categories={ categories }/>
        <ListaTODOs todos={ listaTODOs } 
            esHistorico={ false }/>
    </div>
}

export default MainPage