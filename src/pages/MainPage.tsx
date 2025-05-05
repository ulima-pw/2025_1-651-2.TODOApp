import Formulario from "../components/Formulario"
import ListaTODOs, { type TODO } from "../components/ListaTODOs"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const MainPage = () => {
    const listaTODOs : TODO[]= [
        { id : 1, descripcion : "Ir al cine" },
        { id : 2, descripcion : "Limpiar mi cuarto" },
        { id : 3, descripcion : "Preparar el desayuno" },
        { id : 4, descripcion : "Hacer req. de trabajo de PW" }
    ]

    return <div className="container">
        <Titulo texto="TODO App"/>
        <Navegacion />
        <Formulario />
        <ListaTODOs todos={ listaTODOs }/>
    </div>
}

export default MainPage