const INTIAL_STATE = {
    data: [],
    loading: false
}

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case "FETCH_STUDENTS":
            return {...state, loading: true};
        case "FETCH_STUDENTS_SUCCESSFULLY":
            return {...state, data: action.payload, loading: false};
        case "FETCH_STUDENTS_FAILURE":
            return {...state, data: action.payload, loading: false}
        default:
            return state;
    }
}
