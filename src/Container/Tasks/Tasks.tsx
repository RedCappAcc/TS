import Task from '../Task/Task'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {IInitialState, Itodo } from '../../store/actions/actionInterface'
import {initTodo} from '../../store/actions/action'
import './Tasks.css'


function Tasks(){
    const dispatch = useDispatch()

    const selectTodos = (state:IInitialState)=>state.todos
    const todosRedux:Itodo[] = useSelector(selectTodos);
    const selectActiveTodo = (state:IInitialState)=>state.activeTodo
    const activeTodo:number = useSelector(selectActiveTodo);
    
    let [todo, setTodo] = useState<Array<any>>([])

    useEffect(():void=>{
        const todos:string|null = localStorage.getItem('todos')
        if(todos!==null){
          let result:Itodo[] = JSON.parse(todos)
          dispatch(initTodo(result))
        }
    },[])
    useEffect(():void=>{
       const result =  todosRedux.map((el,index)=>{
            return <Task activeTodo = {activeTodo} index = {index} text={el.text} status = {el.status}  key = {index+1*(Math.random()*1000)} />
        }
       )
       setTodo(result)

        },[todosRedux,activeTodo]
    )

    return(
        <div className='tasks'>
            {todo}
        </div>
    )
}

export default Tasks