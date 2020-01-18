import {
    ADD_USER_PENDING, ADD_USER_FULFILLED, ADD_USER_REJECTED
} from '../actionts/user';

const initialState = {
    addUserResult: {},
    user: {},
    users: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_PENDING:
            return {
                ...state,
            }
        case ADD_USER_FULFILLED:
            return {
                ...state,
                addUserResult: action.payload
            }
        case ADD_USER_REJECTED:
            return {
                ...state,
            }
        default:
            return state;
    }
}
