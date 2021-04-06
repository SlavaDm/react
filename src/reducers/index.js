import { applyMiddleware, combineReducers, createStore } from 'redux';
import ToDo from './ToDo';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Users from './Users';

const rootReducer = combineReducers({
	todo: ToDo,
	users: Users
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
