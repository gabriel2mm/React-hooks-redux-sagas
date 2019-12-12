import TodosType from './Types/TodoType';

const INITIAL_STATE = {todos: []}
export default function Todos( state = INITIAL_STATE , action){
    switch(action.type){
        case TodosType.ADD_TODO_SUCCESS:
            return {...state , todos: [...state.todos, action.payload]};
        default : return {...state}
    }   
}