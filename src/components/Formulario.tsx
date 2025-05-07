import { useState } from "react"

interface FormularioProps {
    agregar : ( texto : string ) => void
}

const Formulario = (props : FormularioProps) => {
    const [ textoTODO, setTextoTODO ] = useState("")

    const textoOnChange = (evt : React.ChangeEvent<HTMLInputElement>) => {
        setTextoTODO(evt.currentTarget.value)
    }

    return <div>
        { /* Formulario TODOs  */ } 
        <div className="row mt-4">
            <div className="col-md-10">
                <input className="form-control" 
                    type="text"
                    value={ textoTODO }
                    onChange={ textoOnChange } />
            </div>
            <div className="col-md-2">
                <button className="btn btn-primary" 
                    type="button"
                    onClick={ () => {
                        props.agregar(textoTODO)
                    } }>
                    Agregar
                </button>
            </div>
        </div>
    </div>
}

export default Formulario