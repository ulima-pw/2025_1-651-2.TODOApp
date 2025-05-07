import { useState } from "react"
import Formulario from "../components/Formulario"
import ListaTODOs, { type TODO } from "../components/ListaTODOs"
import Navegacion from "../components/Navegacion"
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
        <Titulo texto="TODO App"/>
        <Navegacion />
        <Formulario agregar={ agregarTODO }/>
        <ListaTODOs todos={ listaTODOs }/>
    </div>
}

export default MainPage