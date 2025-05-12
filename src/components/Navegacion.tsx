import { Link } from "react-router-dom"

const Navegacion = () => {
    return <div>
        { /* Seccion Tabs  */ }
        <ul className="nav nav-tabs">
            <li className="nav-item">
            <a className="nav-link active" href="#">
                Tareas
            </a>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/historico">
                    Histórico
                </Link>
            </li>
        </ul>
    </div>
}

export default Navegacion