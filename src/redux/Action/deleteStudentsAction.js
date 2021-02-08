import API from "../../Services/api";
import {fetchingStudents} from "../Action/index";

export const deleteStudent = (payload) => ({
    type: "DELETE_STUDENTS",
    payload
});

function deletingStudent(payload) {
    return  dispatch => {
        dispatch(deleteStudent(payload))
         API('delete', 'students',null, payload).then((res) =>
             dispatch(fetchingStudents())
         )

    }
}

export {deletingStudent};