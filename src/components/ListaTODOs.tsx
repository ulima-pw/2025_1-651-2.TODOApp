export interface TODO {
    id? : number
    descripcion : string
}

interface ListaTODOsProps {
    todos : TODO[]
    esHistorico : boolean
}

const ListaTODOs = (props : ListaTODOsProps) => {
    return <div>
        { /* Lista TODOs  */ }
        <ul className="list-group mt-4">
            {
                props.todos.map( (elemento : TODO) => {
                    return <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            { elemento.descripcion }
                        </div>
                        {
                            //props.esHistorico ? "" : <input className="form-check-input" type="checkbox" />
                        }
                        {
                            (() => {
                                if (!props.esHistorico) {
                                    return <input className="form-check-input" type="checkbox" />
                                }
                            })()
                        }
                        
                    </li>
                })
            }
        </ul>
    </div>
}

export default ListaTODOs