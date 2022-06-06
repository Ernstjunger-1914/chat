import { SET_USER } from '../actions/type';

const initState = {
    currentUser: null,
    isLoading: true
};

export default function (state = initState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isLoading: false
            }

        default:
            return state;
    }
}