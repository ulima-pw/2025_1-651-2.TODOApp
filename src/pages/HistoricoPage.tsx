import ListaTODOs, { type TODO } from "../components/ListaTODOs"
import Navegacion from "../components/Navegacion"
import Titulo from "../components/Titulo"

const HistoricoPage = () => {
    const listaHistorico : TODO[] = [
        { id : 1, descripcion : "Estudiar PW"}
    ]
    return <div className="container">
        <Titulo texto="TODO - Histórico" />
        <Navegacion />
        <ListaTODOs todos={ listaHistorico } 
            esHistorico={ true } />
    </div>
}

export default HistoricoPage