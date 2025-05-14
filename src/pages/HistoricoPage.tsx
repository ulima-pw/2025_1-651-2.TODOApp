import ListaTODOs, { type TODO } from "../components/ListaTODOs"
import Navegacion, { Pagina } from "../components/Navegacion"
import Titulo from "../components/Titulo"

const HistoricoPage = () => {
    const listaHistorico : TODO[] = [
        { id : 1, descripcion : "Estudiar PW"}
    ]
    return <div className="container">
        <Titulo texto="TODO - Histórico" pagina={Pagina.Historico} />
        <Navegacion pagina={ Pagina.Historico }/>
        <ListaTODOs todos={ listaHistorico } 
            esHistorico={ true } />
    </div>
}

export default HistoricoPage