import { useState } from "react"
import type{ Category } from "../pages/MainPage"

interface FormularioProps {
    agregar : ( texto : string ) => void
    categories: Category[]
}

const Formulario = (props : FormularioProps) => {
    const [ textoTODO, setTextoTODO ] = useState("")
    const [ selectedCategory, setSelectedCategory ] = useState<number | "">("")

    const textoOnChange = (evt : React.ChangeEvent<HTMLInputElement>) => {
        setTextoTODO(evt.currentTarget.value)
    }

    const categoryOnChange = (evt : React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(evt.currentTarget.value === "" ? "" : Number(evt.currentTarget.value))
    }

    return <div>
        { /* Formulario TODOs  */ } 
        <div className="row mt-4">
            <div className="col-md-6">
                <input className="form-control" 
                    type="text"
                    value={ textoTODO }
                    onChange={ textoOnChange } />
            </div>
            <div className="col-md-3">
                <select 
                    className="form-select"
                    value={ selectedCategory }
                    onChange={ categoryOnChange }>
                    <option value="">Seleccionar categoría</option>
                    {
                        props.categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.nombre}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="col-md-3">
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