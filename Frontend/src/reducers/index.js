import { combineReducers } from "redux";
import proyectoReducer from "./proyectoReducer";
import tareaReducer from "./tareaReducer";

export default combineReducers({
    proyectoReducer,
    tareaReducer,
});
