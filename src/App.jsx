import { useState } from "react";
import "./App.css";
import Header from "./componentes/Header/header.jsx";
import Formulario from "./componentes/Formulario/formulario.jsx";
import MiOrg from "./componentes/MiOrg/MiOrg.jsx";
import Equipo from "./componentes/Equipo/Equipo.jsx";
import Footer from "./componentes/Footer/Footer.jsx";
import { v4 as uuid } from 'uuid';

function App() {
  const [mostrarFormulario, actualizaMostrarMostrar] = useState(false);
  const [colaboradores, actualizaColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      nombre: "Juana",
      puesto: "Instructor",
      foto: "https://avatars.githubusercontent.com/u/92184087?v=4",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      nombre: "Juana",
      puesto: "Instructor",
      foto: "https://avatars.githubusercontent.com/u/92184087?v=4",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Devops",
      nombre: "Juana",
      puesto: "Instructor",
      foto: "https://avatars.githubusercontent.com/u/92184087?v=4",
      fav: false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      nombre: "Juana",
      puesto: "Instructor",
      foto: "https://avatars.githubusercontent.com/u/92184087?v=4",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Móvil",
      nombre: "Juana",
      puesto: "Instructor",
      foto: "https://avatars.githubusercontent.com/u/92184087?v=4",
      fav: false
    },
  ]);

  const [equipos, actualizarEquipos] = useState([
    //Lista de equipos
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const cambiarMostrar = () => {
    actualizaMostrarMostrar(!mostrarFormulario);
  };

  //registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Datos en App: ", colaborador);

    //spread operator, ...colaboradores establece el valor que ya se tiene, y el nuevo colaborador que se va a agregar.
    actualizaColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizaColaboradores(nuevosColaboradores);
  };

  //actualizar color de fondo del equipo
  const actualizarEquipo = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }

      return equipo;
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear Nuevo equipo
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizaColaboradores(colaboradoresActualizados)
  }

  return (
    <>
      <div>
        <Header />

        {mostrarFormulario === true ? (
          <Formulario
            equipos={equipos.map((equipo) => equipo.titulo)}
            registrarColaborador={registrarColaborador}
            crearEquipo={crearEquipo}
          />
        ) : (
          <></>
        )}

        <MiOrg cambiarMostrar={cambiarMostrar} />

        {equipos.map((equipo) => {
          return (
            <Equipo
              datos={equipo}
              key={equipo.titulo}
              colaboradores={colaboradores.filter(
                (colaborador) => colaborador.equipo === equipo.titulo
              )}
              eliminarColaborador={eliminarColaborador}
              actualizarEquipo={actualizarEquipo}
              like={like}
            />
          );
        })}

        <Footer />
      </div>
    </>
  );
}

export default App;
