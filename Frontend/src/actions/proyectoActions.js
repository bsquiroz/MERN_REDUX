export const types = {
    FORMULARIO_PROYECTO: "FORMULARIO_PROYECTO",
    OBTENER_PROYECTOS: "OBTENER_PROYECTOS",
    AGREGAR_PROYECTO: "AGREGAR_PROYECTO",
    VALIDAR_FORMULARIO: "VALIDAR_FORMULARIO",
    PROYECTO_ACTUAL: "PROYECTO_ACTUAL",
    ELIMINAR_PROYECTO: "ELIMINAR_PROYECTO",
};

const proyectosAux = [
    { nombre: "tienda virtual", id: 1 },
    { nombre: "Intranet", id: 2 },
    { nombre: "Diseño de sitio web", id: 3 },
    { nombre: "Diseño de base de datos", id: 4 },
];

//serie de funciones para el CRUD

export const mostrarFormulario = () => {
    return {
        type: types.FORMULARIO_PROYECTO,
    };
};

//obtener los proyectos
export const obtenerProyectos = () => {
    return {
        type: types.OBTENER_PROYECTOS,
        payload: proyectosAux,
    };
};

//agregar un proyecto
export const agregarProyecto = (proyecto) => {
    return {
        type: types.AGREGAR_PROYECTO,
        payload: proyecto,
    };
};

//Mostrar error
export const mostrarError = () => {
    return {
        type: types.VALIDAR_FORMULARIO,
    };
};

//selecciona el proyecto que el usuario dio click
export const proyectoActual = (proyectoId) => {
    return {
        type: types.PROYECTO_ACTUAL,
        payload: proyectoId,
    };
};

//Elimina un proyecto
export const eliminarProyecto = (proyectoId) => {
    return {
        type: types.ELIMINAR_PROYECTO,
        payload: proyectoId,
    };
};
