import { useState } from "react"
import Formulario from "../components/Formulario"
import ListaTODOs, { type TODO } from "../components/ListaTODOs"
import Navegacion, { Pagina } from "../components/Navegacion"
import Titulo from "../components/Titulo"

const MainPage = () => {
    const [listaTODOs, setListaTODOs  ] = useState<TODO[]>([])

    const agregarTODO = (texto : string) => {
        console.log("aca")
        listaTODOs.push({
            id : listaTODOs.length + 1,
            descripcion : texto
        })
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