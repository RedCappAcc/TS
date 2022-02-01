import './Task.css'
import { Itodo } from '../../store/actions/actionInterface'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { editStatus, deleteTodo, editActiveTodo } from '../../store/actions/action'
const deleteImg = require('./img/delete.png')



interface ITodoProps extends Itodo{
    index:number
    activeTodo:number
}


function Task(props:ITodoProps){
    const dispatch = useDispatch()
    
    let [cls, setCls] = useState<Array<string>>(['task__content'])
    let [taskCls, setTaskCls] = useState<Array<string>>(['task'])
    const randomId = String(Math.random()*1000)
    const [checked, setChecked] = useState<boolean>(props.status)

    function changeStatus(status:boolean):void{
        const todos:string|null = localStorage.getItem('todos')
        if(todos!==null){
            const todosArr:Itodo[] = JSON.parse(todos)
            const newTodos:Itodo[] = todosArr.map(el=>{
                if(el.text===props.text){
                    return({
                        text:el.text, status:status
                    })
                }
                else{
                    return({
                        text:el.text, status:el.status
                    })
                }
            })
            localStorage.setItem('todos',JSON.stringify(newTodos))
        }
    }

    function onCheckedHadler():void{
        dispatch(editStatus(props.text))
        setChecked((prev)=>{
            if(!prev){
                changeStatus(true)
            }
            else{
                changeStatus(false)
            }
            return !prev
        })
    }


    function onDeleteHandler():void{
        dispatch(deleteTodo(props.text))
    }


    function onMouseEnterhadler(){
        setTaskCls(['task', 'animated'])
    }
    function onMouseLeaveHandler(){
        setTaskCls(['task'])
    }

    useEffect(()=>{
        if(checked){
            setCls(['task__content','notActive'])
            
        }
        else{
            setCls(['task__content'])

        }
    },[checked])

    useEffect(()=>{
        if(props.activeTodo===props.index){
            setTaskCls([...taskCls, 'selected'])
        }
    },[props.activeTodo])


    function onClickHadler(){
        dispatch(editActiveTodo(props.index))
    }

    return(
        <div className={taskCls.join (' ') } onClick = {onClickHadler} >
            <div className='task__body'>
                <div className='checkbox'>
                    <input type="checkbox" id = {randomId} checked = {checked} onChange = {onCheckedHadler}/>
                    <label className={cls.join(' ')} htmlFor={randomId}>{props.text}</label>
                </div>
            </div>
            <div className='delete__task' onClick={onDeleteHandler} onMouseEnter = {onMouseEnterhadler} onMouseLeave = {onMouseLeaveHandler}>  
                <img src={deleteImg} alt="" />
            </div>
        </div>
    )
}

export default Task