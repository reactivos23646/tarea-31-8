import React from 'react'
import Tasks from './Tasks';
import Form from '../Form/Form';

const List = () => {
  //TAREAS: Creo mi useState para controlar lo que ingresa el usuario
  const [tasks,setTasks]=useState([]);//Cuando estoy probando lo inicializo con mi MOCK de prueba: useState(MOCK_TASK)
  console.log(tasks);

  //Creo una función para agregar una nueva tarea
  const createTask =(title)=>({
      id: window.crypto.randomUUID(),//para autogenerar un id
      title: title,
      completed: false,
  })
  //Creo la función que voy a pasar como callback al componente Form para evitar que modifique el setTasks
  
  const addTask =(form)=>{//una forma de resolver la problematica con el setTasks
      const newTask = createTask(form.title);
      console.log(newTask);
      setTasks([...tasks, newTask]);
      console.log(tasks);
  }

  
//MAQUETACION DEL VIEW
return (
  <div>
         
          <section id='formEnter'>
              <Form 
                  onsubmitted={(form)=>{
                      addTask(form);
                  }}
              />
          </section>

          <section id='taskList'>
              {tasks.map((task) => {
                  return(
                      <Tasks 
                          key={task.id}
                          title= {task.title}
                          completed= {task.completed}
                      />
                      
                      /* Coloco todo esto en un nuevo componente llamado Tasks.jsx y lo importo
                      <div key={task.id}>
                          <p>
                              <span>{task.title} </span>
                              <span>{task.completed ? "completed" : "to Do"}</span>
                          </p>
                      </div>
                      */
                  );
                  })
              }
          </section>       
  </div>
);
};

export default List