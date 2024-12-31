import "./formulario.css";
import Campo from "../Campo/Campo.jsx";
import ListaOpciones from "../ListaOpciones/ListaOpciones.jsx";
import Boton from "../Boton/Boton.jsx";
import { useState } from "react";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  const { registrarColaborador, crearEquipo } = props

  const manejarEnvio = (event) => {

    event.preventDefault();

    let datosEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
    };

    console.log("enviando datos desde el formulario: ", datosEnviar);

    registrarColaborador(datosEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({titulo, colorPrimario: color});
  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo 
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones 
          valor={equipo} 
          actualizarValor={actualizarEquipo} 
          equipos={props.equipos} 
        />
        <Boton texto="Crear" />
      </form>

      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>
        <Campo 
          titulo="Titulo"
          placeholder="Ingresar titulo"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar color"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />
        <Boton texto="Registrar equipo" />
      </form>
    </section>
  );
};

export default Formulario;
