import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerProyectos } from "../../actions/proyectoActions";

import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
    //obtenemos un porcion del estado
    const proyectoState = useSelector(
        (state) => state.proyectoReducer.proyectos
    );

    //hacemos una instancia de disparch para ejecutar funciones
    const dispatch = useDispatch();

    // obtener proyectos cuando carga
    useEffect(() => {
        dispatch(obtenerProyectos());
        //eslint-disable-next-line
    }, []);

    //revisamos si el state tiene contenido
    if (proyectoState.length === 0)
        return <p>No hay proyectos, comienza creando uno</p>;

    return (
        <ul className="listado-proyectos">
            {proyectoState.map((proyecto) => (
                <Proyecto proyecto={proyecto} key={proyecto.id} />
            ))}
        </ul>
    );
};

export default ListadoProyectos;
