import React, {useState} from 'react'
import Tasks from './Tasks/Tasks';
import Header from './header/Header';
import { Form } from './Form/Form';


//USO DE MOCK:Creo un objeto de prueba del array que necesito

/*
const MOCK_TASK=[
{
    id: 1,
    title: "Tarea 1",
    completed: true,
},
{
    id: 2,
    title: "Tarea 2",
    completed: false,
},
{
    id: 3,
    title: "Tarea 3",
    completed: false,
},
]
*/


const ToDoList = () => { 

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
            <section id='header'>
                <Header /*nuevo componente para el titulo, usando children*/> 
                <h1>Lista de Tareas</h1>
                </Header>
            </section>
            
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

export default ToDoList