import {combineReducers} from "redux";
import GetStudentsReducer from "./getStudentsReducer";
import DeleteStudentReducer from "./deleteStudentsReducer";
import CreateStudentReducer from "./createStudentReducer"


const appReducer = combineReducers({
    GetStudentsReducer,
    DeleteStudentReducer,
    CreateStudentReducer
});


export default appReducer;