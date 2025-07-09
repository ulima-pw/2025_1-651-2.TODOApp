import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Pagina } from "./Navegacion"

interface TituloProps {
    texto : string
    pagina : Pagina
}

const Titulo = (props : TituloProps) => {
    const [contadorClicks, setContadorClicks] = useState(0)
    const navigate = useNavigate() // hook
    
    return <div>
        <h1 className="d-flex justify-content-between align-items-start" onClick={ () => {
                setContadorClicks(contadorClicks + 1)
            } }>
            { props.texto } { contadorClicks }
            {
                (() => {
                    if (props.pagina == Pagina.Historico) {
                        return <button className="btn btn-primary mt-2 me-3" 
                            type="button"
                            onClick={ () => {
                                sessionStorage.removeItem("TODOS")
                                navigate("/")
                            } }>
                            Regresar
                        </button>
                    }
                })()
            }
            
        </h1>
    </div> 
}

export default Titulo