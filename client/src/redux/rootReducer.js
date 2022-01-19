import { combineReducers } from "redux";
import toggleReducer from "./toggle/reducer";


const rootReducer = combineReducers({
  toggleReducer,
});

export default rootReducer;