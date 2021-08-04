import React from "react";
import Tarea from "./Tarea";

import { useDispatch, useSelector } from "react-redux";
import { eliminarProyecto } from "../../actions/proyectoActions";

const ListadoTarea = () => {
    const proyectoState = useSelector(
        (state) => state.proyectoReducer.proyecto
    );

    const tareasproyectoState = useSelector(
        (state) => state.tareaReducer.tareasproyecto
    );

    // console.log(tareasState);
    const dispatch = useDispatch();

    //sino hay proyecto seleccionado
    if (!proyectoState) return <h2>Selecciona o crea un proyecto</h2>;

    //destructurar proyecto ya que viene en forma de arreglo
    const [proyectoActual] = proyectoState;

    return (
        <>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyectoState.length === 0 ? (
                    <li className="tarea">
                        <p>No hay tareas</p>
                    </li>
                ) : (
                    tareasproyectoState.map((tarea) => (
                        <Tarea tarea={tarea} key={tarea.id} />
                    ))
                )}
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => dispatch(eliminarProyecto(proyectoActual.id))}
            >
                Eliminar proyecto &times;
            </button>
        </>
    );
};

export default ListadoTarea;
