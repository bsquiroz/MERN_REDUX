import React, { useEffect, useState } from "react";

import {
    agregarTarea,
    validarTarea,
    obtenerTareas,
    ActualizarTarea,
} from "../../actions/tareasAction";
import { useDispatch, useSelector } from "react-redux";
const initialState = {
    nombre: "",
};

const FormTarea = () => {
    //estraer del estado lo que necesito
    const errorTareaState = useSelector(
        (state) => state.tareaReducer.errortarea
    );
    const tareaseleccionadaState = useSelector(
        (state) => state.tareaReducer.tareaseleccionada
    );
    const proyectoState = useSelector(
        (state) => state.proyectoReducer.proyecto
    );

    //funcion para despachar las funciones
    const dispatch = useDispatch();

    //state del formulario
    const [tarea, setTarea] = useState(initialState);
    const { nombre } = tarea;

    useEffect(() => {
        if (tareaseleccionadaState) {
            setTarea(tareaseleccionadaState);
        }
    }, [tareaseleccionadaState]);

    //Sino hay proyectos relacionados
    if (!proyectoState) return null;

    //leer los valores del formulario
    const handleChange = (e) => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value,
        });
    };

    //destructurar el arreglo para ingresar al proyecto actual
    const [proyectoActual] = proyectoState;

    const onSubmitForm = (e) => {
        e.preventDefault();

        //validar
        if (nombre.trim() === "") {
            dispatch(validarTarea());
            return;
        }

        //si es ediccion o una tarea
        if (tareaseleccionadaState) {
            //actualiza la tarea existente
            dispatch(ActualizarTarea(tarea));
        } else {
            //agregar la nueva tarea
            tarea.proyectoId = proyectoActual.id;
            tarea.id = Date.now();
            tarea.estado = false;
            dispatch(agregarTarea(tarea));
        }

        //Obtener y filtrar las tareas del proyecto actual
        dispatch(obtenerTareas(proyectoActual.id));

        //reiniciar el form
        setTarea(initialState);
    };

    return (
        <div className="formulario">
            <form onSubmit={onSubmitForm}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        value={
                            tareaseleccionadaState
                                ? "Editar tarea"
                                : "Agregar tarea"
                        }
                        className="btn btn-primario btn-submit btn-block"
                    />
                </div>
            </form>
            {errorTareaState && (
                <p className="mensaje error">
                    El nombre de la tarea es obligatorio
                </p>
            )}
        </div>
    );
};

export default FormTarea;
