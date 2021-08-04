import React, { useEffect } from "react";

import {
    eliminartarea,
    obtenerTareas,
    CambiarEstadoTarea,
    GuardarTareaActual,
} from "../../actions/tareasAction";

import { useDispatch, useSelector } from "react-redux";

const Tarea = ({ tarea }) => {
    const dispatch = useDispatch();

    //funcion para cuando eliminamos una tarea
    const handleEliminar = (id, idProyecto) => {
        dispatch(eliminartarea(id));
        dispatch(obtenerTareas(idProyecto));
    };

    //funcion que modifica el estado de la tarea
    const handleCambioEstado = (tarea) => {
        tarea.estado = !tarea.estado;
        dispatch(CambiarEstadoTarea(tarea));
    };

    const tareasState = useSelector((state) => state.tareaReducer.tareas);

    useEffect(() => {}, [tareasState]);
    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado ? (
                    <button
                        type="button"
                        className="completo"
                        onClick={() => handleCambioEstado(tarea)}
                    >
                        Completo
                    </button>
                ) : (
                    <button
                        type="button"
                        className="incompleto"
                        onClick={() => handleCambioEstado(tarea)}
                    >
                        Incompleto
                    </button>
                )}
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => dispatch(GuardarTareaActual(tarea))}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => handleEliminar(tarea.id, tarea.proyectoId)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
};

export default Tarea;
