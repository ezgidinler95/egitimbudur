import {
    ADD_USER_PENDING, ADD_USER_FULFILLED, ADD_USER_REJECTED
} from '../actionts/user';

const initialState = {
    loginResult: {},
    person: {},
    persons: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_PENDING:
            return {
                ...state,
                addDepartmentLoading: true
            }
        case ADD_USER_FULFILLED:
            return {
                ...state,
                addDepartmentLoading: false,
                addDepartmentResult: action.payload
            }
        case ADD_USER_REJECTED:
            return {
                ...state,
                addDepartmentLoading: false
            }
        default:
            return state;
    }
}
