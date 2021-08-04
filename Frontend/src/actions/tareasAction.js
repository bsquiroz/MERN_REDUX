export const types = {
    TAREAS_PROYECTO: "TAREAS_PROYECTO",
    AGREGAR_TAREA: "AGREGAR_TAREA",
    VALIDAR_TAREA: "VALIDAR_TAREA",
    ELIMINAR_TAREA: "ELIMINAR_TAREA",
    ESTADO_TAREA: "ESTADO_TAREA",
    TAREA_ACTUAL: "TAREA_ACTUAL",
    ACTUALIZAR_TAREA: "ACTUALIZAR_TAREA",
};

//obtener las tareas de un proyecto
export const obtenerTareas = (proyectoId) => {
    return {
        type: types.TAREAS_PROYECTO,
        payload: proyectoId,
    };
};

//Agregar una tareas al proyecto seleccionado
export const agregarTarea = (tarea) => {
    return {
        type: types.AGREGAR_TAREA,
        payload: tarea,
    };
};

//valida y muestra un error
export const validarTarea = () => {
    return {
        type: types.VALIDAR_TAREA,
    };
};

//Eliminar tareas por id
export const eliminartarea = (tareaId) => {
    return {
        type: types.ELIMINAR_TAREA,
        payload: tareaId,
    };
};

//Cambia el estado de cada tarea
export const CambiarEstadoTarea = (tarea) => {
    return {
        type: types.ESTADO_TAREA,
        payload: tarea,
    };
};

//Extrae una tarea para edicción
export const GuardarTareaActual = (tarea) => {
    return {
        type: types.TAREA_ACTUAL,
        payload: tarea,
    };
};

//edita la tarea
export const ActualizarTarea = (tarea) => {
    return {
        type: types.ACTUALIZAR_TAREA,
        payload: tarea,
    };
};
