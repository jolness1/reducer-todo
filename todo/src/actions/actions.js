export const ADD_TODO = "ADD_TODO";
export const MARK_COMPLETE = "MARK_COMPLETE";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const addTodo = (item) => {
    return( {type:ADD_TODO, payload:item } );
}

export const markComplete = (completed) => {
    return( {type:MARK_COMPLETE, payload:completed} )
}

export const clearCompleted = () => {
    return( {type:CLEAR_COMPLETED} )
}