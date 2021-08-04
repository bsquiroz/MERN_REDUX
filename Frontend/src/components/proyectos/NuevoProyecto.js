import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
} from "../../actions/proyectoActions";

const initialState = {
    nombre: "",
};

const NuevoProyecto = () => {
    const formularioState = useSelector(
        (state) => state.proyectoReducer.formulario
    );
    const errorFormularioState = useSelector(
        (state) => state.proyectoReducer.errorformulario
    );

    const dispatch = useDispatch();

    //State para proyecto
    const [proyecto, setProyecto] = useState(initialState);

    //destructuro el state (proyecto) para pasarlo al value del input
    const { nombre } = proyecto;

    //funcion encargada de recuperar lo escrito en el input
    const onChangeProyecto = (e) => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value,
        });
    };

    //funcion encargada de ejecutarse cuando el formulario haga submit
    const onSubmitProyecto = (e) => {
        //no haga la accion por default de un formulario
        e.preventDefault();

        //Validar el proyecto
        if (nombre.trim() === "") {
            dispatch(mostrarError());
            return;
        }

        //Agregar el state
        proyecto.id = Date.now();
        dispatch(agregarProyecto(proyecto));

        //Reiniciar el form
        setProyecto(initialState);
    };

    return (
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => dispatch(mostrarFormulario())}
            >
                {formularioState ? "Cancelar" : "Nuevo proyecto "}
            </button>
            {formularioState && (
                <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}
                >
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        onChange={onChangeProyecto}
                        value={nombre}
                    />
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar proyecto"
                    />
                </form>
            )}
            {errorFormularioState && (
                <p className="mensaje error">El nombre es obligatorio</p>
            )}
        </>
    );
};

export default NuevoProyecto;
