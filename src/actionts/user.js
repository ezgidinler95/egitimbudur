import axios from 'axios';
import { API_URL } from '../config/config';

export const ADD_USER_PENDING = "ADD_USER_PENDING";
export const ADD_USER_FULFILLED = "ADD_USER_FULFILLED";
export const ADD_USER_REJECTED = "ADD_USER_REJECTED";


export function addUser(user) {
    return async dispatch => {
        await dispatch({
            type: "ADD_USER",
            payload: axios.post(`${API_URL}/user`, user)
                .then(result => result.data)
        })
    }
}
