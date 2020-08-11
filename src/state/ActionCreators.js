export const ADD_PROS = "ADD_PROS";
export const DELETE_PROS = "DELETE_PROS";
export const ADD_CONS = "ADD_CONS";
export const DELETE_CONS = "DELETE_CONS";

export const ADD_PROS_AC = (pros) => ({type: ADD_PROS, pros});
export const DELETE_PROS_AC = (id) => ({type: DELETE_PROS, id});
export const ADD_CONS_AC = (cons) => ({type: ADD_CONS, cons});
export const DELETE_CONS_AC = (id) => ({type: DELETE_CONS, id});