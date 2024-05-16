import { createStore, combineReducers } from "redux";
import formReducer from "./reducers/formReducer";

const rootReducer = combineReducers({
  formReducer,
});

const store = createStore(rootReducer);

export default store;
