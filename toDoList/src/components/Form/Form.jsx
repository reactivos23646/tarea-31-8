import React, {useState} from 'react'

export const Form = ({onsubmitted=(form)=>{}}) => {//paso un call back en vez de setTasks

//TRAIGO DE ToDoList todo lo relacionado con la lógica del formulario

//FORMULARIOS: Creo mi useState para el formulario con un objeto con contiene el title
    const [form,setForm] = useState(
        {
            title:"",
        }
    );

    //Creo función para resetear formulario
    const resetForm =()=>
        setForm({
            title:"",
        })


//MANIPULANDO EVENTOS CON FUNCIONES HANDLE...        
    //Creo el handleChange
    const handleChange = (e)=>{
        const {name, value} = e.target;//desestructuro e.target y me quedo solo con name y value
        setForm({//uso este cuando tengo un objeto con varios campos
            ...form,//DEBO RECORDAR DE USARLO O SE ROMPE EL FORMULARIO. 
            [name]: value, //esto es igual a [e.target.name]: e.tarjet.value
        })
    };
    
    //Creo el handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();//me permite controlar todo yo

        /*  Retiro toda esta parte del código para evitar pasar setTasks 
            y trato de pasarlo en un callback que llamamos onsubmitted()

        const newTask = createTask(form.title);
        console.log(newTask);
        setTasks([...tasks, newTask]);
        console.log(tasks);
        */

        onsubmitted(form);
        resetForm();

    };





  return (
    <form onSubmit={handleSubmit}>
            <input 
                name='title' 
                type="text"
                value={form.title}
                onChange={handleChange} 
            />
            <button 
                type='submit'
            >
                AGREGAR TAREA
            </button>
    </form>
  )
}
