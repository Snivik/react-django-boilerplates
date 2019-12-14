import {buildFormReducerWithActions} from "@snivik/redux-django-boilerplates/form";
import {buildViewSetReducerAndActions} from "@snivik/redux-django-boilerplates/viewset";

const {reducer: createReducer, actions: createActions} = buildFormReducerWithActions('createTask');
const {reducers: viewsetReducers, actions: viewsetActions} = buildViewSetReducerAndActions('task');

export const createTaskReducer = createReducer;
export const createTaskActions = createActions;
export const taskViewsetReducers = viewsetReducers;
export const taskViewsetActions = viewsetActions;


