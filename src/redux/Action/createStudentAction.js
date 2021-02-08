import API from "../../Services/api";
import {fetchingStudents} from "../Action/index";

export const createStudent = (payload) => ({
    type: "CREATE_STUDENTS",
    payload
});

function creatingStudents(payload) {

    return async dispatch => {
        dispatch(createStudent(payload))
        await API(payload.Sid ? 'put' : 'post', 'students', payload, payload.Sid).then((res) =>
            dispatch(fetchingStudents())
        )
    }
}

export {creatingStudents};


