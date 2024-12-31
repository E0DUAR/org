import "./Colaborador.css"
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillHeart, AiOutlineHeart  } from "react-icons/ai";

const Colaboradores = (props) => {

    const {nombre, puesto, foto, equipo, id, fav} = props.datos;
    const {colorPrimario, eliminarColaborador, like} = props;

    return <div className="colaborador">
        <IoIosCloseCircle  className="cerrar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav === true ? <AiFillHeart color="red" onClick={ ()=> like(id) }/> : <AiOutlineHeart color="red" onClick={ ()=> like(id) } />}
        </div>
    </div>

}

export default Colaboradores;