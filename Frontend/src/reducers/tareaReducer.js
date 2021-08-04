import { types } from "../actions/tareasAction";

const tareasArray = [
    {
        nombre: "Movimiento naranja",
        estado: false,
        id: 1,
        proyectoId: 1,
    },
    {
        nombre: "El futuro está en tus manos",
        estado: false,
        id: 2,
        proyectoId: 1,
    },
    {
        nombre: "Movimiento naranja",
        estado: false,
        id: 3,
        proyectoId: 1,
    },
    {
        nombre: "Movimiento ciudadano",
        estado: false,
        id: 4,
        proyectoId: 1,
    },
    {
        nombre: "De esquina a esquina",
        estado: true,
        id: 5,
        proyectoId: 2,
    },
    {
        nombre: "Y ahí nos vamos",
        estado: true,
        id: 6,
        proyectoId: 2,
    },
    {
        nombre: "El mundo es grande pero lo tengo en mi mano",
        estado: true,
        id: 7,
        proyectoId: 2,
    },
    {
        nombre: "Estoy muy duro, sí",
        estado: true,
        id: 8,
        proyectoId: 2,
    },
    {
        nombre: "Okay, ahí vamo'",
        estado: true,
        id: 9,
        proyectoId: 3,
    },
    {
        nombre: "Y con el tiempo nos seguimos elevando",
        estado: true,
        id: 10,
        proyectoId: 3,
    },
    {
        nombre: "Que seguimos rompiendo aquí",
        estado: false,
        id: 11,
        proyectoId: 3,
    },
    {
        nombre: "Esta fiesta no tiene fin",
        estado: false,
        id: 12,
        proyectoId: 3,
    },
    {
        nombre: "Botellas para arriba sí",
        estado: false,
        id: 13,
        proyectoId: 4,
    },
    {
        nombre: "Los tengo bailando rompiendo y yo sigo aquí",
        estado: false,
        id: 14,
        proyectoId: 4,
    },
    {
        nombre: "Estamos rompiendo la discoteca",
        estado: true,
        id: 15,
        proyectoId: 4,
    },
    {
        nombre: "La fiesta no para, apenas comienza",
        estado: true,
        id: 16,
        proyectoId: 4,
    },
];

const INITIAL_STATE = {
    tareas: tareasArray,
    tareasproyecto: null,
    errortarea: false,
    tareaseleccionada: null,
};

const tarea = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: state.tareas.filter(
                    (tarea) => tarea.proyectoId === action.payload
                ),
            };

        case types.AGREGAR_TAREA:
            return {
                ...state,
                tareas: [...state.tareas, action.payload],
                errortarea: false,
            };

        case types.VALIDAR_TAREA:
            return {
                ...state,
                errortarea: true,
            };

        case types.ELIMINAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter(
                    (tarea) => tarea.id !== action.payload
                ),
            };

        case types.ESTADO_TAREA:
            return {
                ...state,
                tareas: state.tareas.map((tarea) =>
                    tarea.id === action.payload.id ? action.payload : tarea
                ),
            };

        case types.TAREA_ACTUAL:
            return {
                ...state,
                tareaseleccionada: action.payload,
            };

        case types.ACTUALIZAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.map((tarea) =>
                    tarea.id === action.payload.id ? action.payload : tarea
                ),
                tareaseleccionada: null,
            };
        default:
            return state;
    }
};

export default tarea;
