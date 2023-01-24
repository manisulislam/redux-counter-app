import { createStore } from "redux";
import counterReducer from "./Services/Reducer/counteReducer";

const store = createStore(counterReducer)
export default store;