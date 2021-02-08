const INTIAL_STATE = {
    deleteStudent : []
}

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case "DELETE_STUDENTS":
            return {...state, deleteStudent: action.payload};
        default:
            return state;
    }
}
