import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador.jsx";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  //Descructuración
  const { colorPrimario, colorSecundario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarEquipo, like } = props;

  //estilos
  const estiloTItulo = { borderColor: colorPrimario };
  const estiloBackground = { backgroundColor: hexToRgba(colorPrimario, "0.6") };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={estiloBackground}>
          <input
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(e) => actualizarEquipo(e.target.value, id)}
          />
          <h3 style={estiloTItulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (
              <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
