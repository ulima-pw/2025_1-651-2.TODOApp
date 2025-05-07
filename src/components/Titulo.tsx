import { useState } from "react"

interface TituloProps {
    texto : string
}

const Titulo = (props : TituloProps) => {
    const [contadorClicks, setContadorClicks] = useState(0)
    
    return <h1 onClick={ () => {
        setContadorClicks(contadorClicks + 1)
    } }>
        { props.texto } { contadorClicks }
    </h1>
}

export default Titulo