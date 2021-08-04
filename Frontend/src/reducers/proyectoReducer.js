import { types } from "../actions/proyectoActions";

const INITIAL_STATE = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null,
};

const proyecto = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: !state.formulario,
            };

        case types.OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload,
            };

        case types.AGREGAR_PROYECTO:
            return {
                ...state,
                proyectos: [action.payload, ...state.proyectos],
                formulario: false,
                errorformulario: false,
            };

        case types.VALIDAR_FORMULARIO:
            return {
                ...state,
                errorformulario: true,
            };

        case types.PROYECTO_ACTUAL:
            return {
                ...state,
                proyecto: state.proyectos.filter(
                    (proyecto) => proyecto.id === action.payload
                ),
            };

        case types.ELIMINAR_PROYECTO:
            return {
                ...state,
                proyectos: state.proyectos.filter(
                    (proyecto) => proyecto.id !== action.payload
                ),
                proyecto: null,
            };
        default:
            return state;
    }
};

export default proyecto;
