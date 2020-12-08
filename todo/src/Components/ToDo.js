import React, { useState, useReducer } from 'react';
import {reducer, initialState } from './../reducers/index';
// import {addTodo, markComplete, clearCompleted} from './../actions/actions';

const currentState = reducer(initialState, { type: "STATE_THAT_DOESNT_EXIST" });
console.log(currentState);

const ToDo = () => {
    const [inputValue, setInputValue] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);

    const onInput = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            item: inputValue,
            id: Date.now(),
            completed: false,
        };
        dispatch({ type: "ADD_TODO", payload: newTask });
        setInputValue("");
    };


    const onTaskClick = (e, todo) => {
        dispatch({ type: "MARK_COMPLETE", payload: todo.id });
    };

    const onClickClear = (e) => {
        dispatch({ type: "CLEAR_COMPLETED" });
    };

    return ( <div>
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="string"
                    name="newTodo"
                    value={inputValue}
                    placeholder="Write your new to do item here"
                    onChange={onInput}
                />
                <button>Add New Item</button>
                <button onClick={onClickClear}> Clear Completed Task(s)</button>
            </form>
        </div>
        <div className="output">
            {state.todoList.length > 0 &&
                state.todoList.map((todo, i) => (
                    <div
                        key={i}
                        onClick={(e) => onTaskClick(e, todo)}
                        style={{
                            textDecoration: todo.completed? "line-through": "none",
                        }}
                        >
                        {todo.item}
                        </div>
                        ))}
        </div>
    </div >
    );
}


export default ToDo;