import { useState } from "react";
function ToDoListApp(){
    const [tasks, setTasks] =useState(["Eat", "Dog", "Walk"]);
    const [newTask, setnewTask] =useState("");

function handleInputChange(event){
    setnewTask(event.target.value);
}
function addTask (){
    
}
function deleteTask (index){
    
}
function moveTaskUp (index){
    
}
function moveTaskDown (index){
    
}
    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="Enter a task" value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text"> {task}</span>
                    <button className="delete-button" onClick={ () => deleteTask(index)}>Delete</button>
                    <button className="up-button" onClick={ () => moveTaskUp(index)}>Up </button>
                    <button className="up-button" onClick={ () => moveTaskDown(index)}>Down </button>
                </li>
                )}
            </ol>
        </div>
    );
}



export default ToDoListApp