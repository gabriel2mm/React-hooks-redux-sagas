import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function TodoComponente() {
    const [state, setState] = useState({ value: "" });
    const dispatch = useDispatch();
    const todos = useSelector(state=> state.Todos.todos);

    function changeText(event) {
        setState({ ...state, value: event.target.value });
    }

    function addTodos(event){
        dispatch({ type: 'ASYNC_ADD_TODO', payload: state.value });
    }

    return (
        <>
            <ul>{todos.map(r=> (<li key={r}>{r}</li>))}</ul>
            <input type="text" name="todo" value={state.value} onChange={changeText} />
            <button onClick={addTodos}>Add Todo</button>
        </>
    );
}
