import { useEffect, useState } from "react"
import Formulario from "../components/Formulario"
import ListaTODOs, { type TODO } from "../components/ListaTODOs"
import Navegacion, { Pagina } from "../components/Navegacion"
import Titulo from "../components/Titulo"

const URL = "https://script.google.com/macros/s/AKfycbxR06kwYzBmVIy9NoLCq1ddnLj4PIT9uGvPNiK_I5aAob7qrYUs-Q7XPfLab3Lk1ZD9KQ/exec"

const MainPage = () => {
    /*const listaPersistenteStr = sessionStorage.getItem("TODOS")
    let listaPersistente : TODO[]
    if (listaPersistenteStr == null) {
        listaPersistente = []
    } else {
        listaPersistente = JSON.parse(listaPersistenteStr)
    }*/

    const [listaTODOs, setListaTODOs  ] = useState<TODO[]>([])

    const httpObtenerTODOsAsyncAwait = async () => {
        try {
            const resp = await fetch(URL)
            const data = await resp.json()
            console.log(data)
            setListaTODOs(data)
        }catch(error) {
            console.error(error)
        }
    }

    useEffect(() => {
        httpObtenerTODOsAsyncAwait()
    }, [])

    const agregarTODO = (texto : string) => {
        console.log("aca")
        listaTODOs.push({
            id : listaTODOs.length + 1,
            descripcion : texto
        })
        sessionStorage.setItem("TODOS", JSON.stringify(listaTODOs))
        setListaTODOs([...listaTODOs])
    }

    return <div className="container">
        <Titulo texto="TODO App" pagina={ Pagina.Main }/>
        <Navegacion pagina={ Pagina.Main } />
        <Formulario agregar={ agregarTODO }/>
        <ListaTODOs todos={ listaTODOs } 
            esHistorico={ false }/>
    </div>
}

export default MainPage