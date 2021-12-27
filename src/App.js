import React from "react";
import TodoItem from "./TodoItem";
import './App.css'
import todoData from './todoData'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            todo: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prevState => {
            const Updatedtodo = prevState.todo.map (todos =>{
                    if(todos.id === id){
                        todos.completed = !todos.completed
                    }
                    return todos
                })
                return {
                    todo: Updatedtodo
                }
            
        })
    
    }       

    render(){

        const todoItem = this.state.todo.map(item => 
        <TodoItem
        key={item.id}
        item={item} 
        handleChange={this.handleChange}
        />
        )
        
    return(
        <div className="todo-list">
            <h1 className="todo">Todo List</h1>
            {todoItem}
        </div>
    )
    }
    
}

export default App;