import { combineReducers } from "redux";
import LoginLogout, { OperationCounter } from "./Reducer";


const rootReducer = combineReducers({ LoginLogout, OperationCounter});

export default rootReducer;