import "./Campo.css";

const Campo = (props) => {

    //destructuracion
    const { type="text" } = props;

    const placeHolderModificado = `${props.placeholder}...`;

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            
            placeholder={placeHolderModificado}  
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo;