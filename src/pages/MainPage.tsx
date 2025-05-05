const MainPage = () => {
    return <div className="container">
        <h1>TODO App</h1>
        <div>
            { /* Seccion Tabs  */ }
            <ul className="nav nav-tabs">
                <li className="nav-item">
                <a className="nav-link active" href="#">
                    Tareas
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Terminadas
                </a>
                </li>
            </ul>
        </div>
        <div>
            { /* Formulario TODOs  */ } 
            <div className="row mt-4">
                <div className="col-md-10">
                    <input className="form-control" type="text" />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary" type="button">
                        Agregar
                    </button>
                </div>
            </div>
        </div>
        <div>
            { /* Lista TODOs  */ }
            <ul className="list-group mt-4">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        Ir a realizar compras
                    </div>
                    <input className="form-check-input" type="checkbox" />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        Ir a realizar compras
                    </div>
                    <input className="form-check-input" type="checkbox" />
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        Ir a realizar compras
                    </div>
                    <input className="form-check-input" type="checkbox" />
                </li>
            </ul>
        </div>
    </div>
}

export default MainPage