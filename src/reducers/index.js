import { ADD_TODO, REMOVE_TODO, CHECK_TODO } from "../constants/action-types";

const initialState = {
  todos: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(el => el.id !== action.payload.id)
      };
    case CHECK_TODO:
      return {
        ...state,
        todos: state.todos.map(el => {
          if (el.id == action.payload.id) el.check = action.payload.value;
          return el;
        })
      };
    default:
      return state;
  }
};

export default rootReducer;
