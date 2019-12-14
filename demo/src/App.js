import React from 'react';
import './App.css';
import BoilerplateForm from "@snivik/react-django-boilerplates/dist/BoilerplateForm";
import {createTaskActions, taskViewsetActions} from "./redux/task";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from 'react';
import {fetchTasks, setTasks} from "./redux/actions";

//console.log(items);

const formMeta = [
  {name: 'task', fieldProps: {className: 'red', placeholder: 'Enter task name'}},

];





const App = () => {


  const {create, list}  = useSelector(({create,list})=>({create, list}));

  const tasks = list.results || [];

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchTasks());
  }, []);

  const onSubmit=(e) => {

    e && e.preventDefault && e.preventDefault();

    dispatch(setTasks([...tasks, create.data])).then(
        () => {
          dispatch(createTaskActions.clear());
        }
    );



  };

  const onRemove = (id) => () => {
    const shorterTasksList = [...tasks];
    shorterTasksList.splice(id, 1);
    dispatch(setTasks(shorterTasksList));
  };

  const tasksList = (tasks || []).map( (item, id)=><div key={id}>{item.task} <a onClick={onRemove(id)}>X</a></div>);
  return (
    <div className="App">


      {list.loading ? 'Loading...' : tasksList}



      <BoilerplateForm
          meta={formMeta}
          store={create}
          actions={createTaskActions}
          dispatch={dispatch}
          onSubmit={onSubmit}

      />

      <a onClick={onSubmit}>{create.loading ? 'Loading...' : 'Add task'}</a>
    </div>
  );
};

export default App;
