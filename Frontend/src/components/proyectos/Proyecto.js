import React from "react";

import { useDispatch } from "react-redux";
import { obtenerTareas } from "../../actions/tareasAction";
import { proyectoActual } from "../../actions/proyectoActions";

const Proyecto = ({ proyecto }) => {
    const dispatch = useDispatch();

    // funcion para aguegar el proyecto actual y las tareas de ese proyecto
    const seleccionarProyecto = (id) => {
        dispatch(proyectoActual(id)); //fijar un  proyecto actual
        dispatch(obtenerTareas(id)); //fijar las tareas de ese proyecto
    };

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => seleccionarProyecto(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
    );
};

export default Proyecto;
