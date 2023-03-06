import React from 'react'

const ToDoList = (props) =>{

 
   return(<>
   <div className='todo_style'>
    
   <div class="container">
  <div class="row">
    <div class="col">
    <li className='listItems'>{props.text}</li >
    </div>
    <div class="col">
    <button className="btn button" onClick={() =>{
      props.onSelect(props.id);
    }

    }><span class="done-icon material-symbols-outlined">
    task_alt
    </span></button>
    </div>
   
  </div>
</div> 
   
  

   </div>
   
   </>) 
  
  
};

export default ToDoList;
