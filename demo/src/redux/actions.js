import {taskViewsetActions, createTaskActions} from "./task";
import {buildFormApiAction} from "@snivik/redux-django-boilerplates/form/api";


const results = [
    {task: 'Collect underpants'},
    {task: '???'},
    {task: 'profit'},

];

export const fetchTasks = () => dispatch => {


    dispatch(taskViewsetActions.setListLoading({loading: true}));

    setTimeout(()=>{

        console.log('Fake request returned');

        dispatch(taskViewsetActions.setResults({results: results}));
        dispatch(taskViewsetActions.setListLoading({loading: false}));

    }, 3000);


};


const submitTaskService = (tasks) => {
    return (dispatch) => {

        return new Promise((res)=>{

            setTimeout(()=>{

                dispatch(taskViewsetActions.setResults({results: tasks}));
                res();

            }, 2000)

        })
    }
};



export const setTasks = (tasks) => buildFormApiAction(createTaskActions, submitTaskService(tasks));