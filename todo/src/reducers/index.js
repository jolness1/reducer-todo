import {ADD_TODO, MARK_COMPLETE, CLEAR_COMPLETED} from "./../actions/actions.js";
export const initialState = {
   todoList: []
}


export const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_TODO):
            return({
                todoList: [...state.todoList, action.payload ],
            });
        case(MARK_COMPLETE):
            return({
                ...state,
                todoList: state.todoList.map((item) => {
                    return item.id === action.payload
                        ? { ...item, completed:true }
                        :item;
                }),
            });
        case(CLEAR_COMPLETED):
            return ({
                ...state,
                todoList: state.todoList.filter((item) => item.completed === false
                ),
            });
        default:
            return state;
    }

};

