import { ADD_PROS, ADD_CONS,  DELETE_PROS, DELETE_CONS} from './ActionCreators'
export const initialState = {
    pros: [],
    cons: [],
};

export function reducer(state, action) {
    switch (action.type) {
        case ADD_PROS:
            return {
                ...state,
                pros: [...state.pros, action.pros]
            };
        case ADD_CONS:
            return {
                ...state,
                cons: [...state.cons, action.cons]
            };
        case DELETE_PROS:
            return {
                ...state,
                pros: state.pros.filter(item => item.id !== action.id),
            };
        case DELETE_CONS:
            return {
                ...state,
                cons: state.cons.filter(item => item.id !== action.id),
            };
        default:
            return state
    }
}


