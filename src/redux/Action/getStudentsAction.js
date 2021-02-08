import API from "../../Services/api"

export const fetchStudent = () => ({
    type: "FETCH_STUDENTS"
});

export const fetchStudentSuccess = (payload) => ({
    type: "FETCH_STUDENTS_SUCCESSFULLY",
    payload
});

export const fetchStudentFailure = (payload) => ({
    type: "FETCH_STUDENTS_FAILURE",
    payload
});

function fetchingStudents() {
    return async dispatch => {
        dispatch(fetchStudent())
        await API('get', 'students').then((res) =>
            dispatch(fetchStudentSuccess(res.data))
        )
    }
}

export {fetchingStudents};


