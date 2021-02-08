import {createStore, applyMiddleware} from "redux";
import Reducer from "../Reducer/index";
import thunk from "redux-thunk";
const store = createStore(
        Reducer,
        applyMiddleware(thunk)
    )
export default store