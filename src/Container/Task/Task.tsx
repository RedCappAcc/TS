import './Task.css'
import { Itodo, IInitialState } from '../../store/actions/actionInterface'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
    const [checked, setChecked] = useState<boolean>(props.status)

    function changeStatus(status:boolean):void{
        const todos:string|null = localStorage.getItem('todos')
        if(todos!==null){
            const todosArr:Itodo[] = JSON.parse(todos)
            const newTodos:Itodo[] = todosArr.map(el=>{
                if(el.id===props.id){
                    return({
                        text:el.text, status:status, id:el.id
                    })
                }
                else{
                    return({
                        text:el.text, status:el.status, id:el.id
                    })
                }
            })
            localStorage.setItem('todos',JSON.stringify(newTodos))
        }
    }

    function onCheckedHadler():void{
        dispatch(editStatus(props.id))
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
        dispatch(deleteTodo(props.id))
    }


    function onMouseEnterhadler(){
        if(taskCls.indexOf('selected')>0){
            setTaskCls(['task', 'animated', 'selected'])
        }
        else{
            setTaskCls(['task', 'animated'])
        }
        
    }
    function onMouseLeaveHandler(){
        if(taskCls.indexOf('selected')>0){
            setTaskCls(['task', 'selected'])
        }
        else{
            setTaskCls(['task'])
        }
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
            setTaskCls(['task', 'selected'])
        }
        else{
            setTaskCls(['task'])
        }
    },[props.activeTodo])


    function onClickHadler(){
        dispatch(editActiveTodo(props.index))
    }

    return(
        <div className={taskCls.join (' ') } onClick = {onClickHadler} >
            <div className='task__body'>
                <div className='checkbox'>
                    <input type="checkbox" id = {String(props.id)} checked = {checked} onChange = {onCheckedHadler}/>
                    <label className={cls.join(' ')} htmlFor={String(props.id)}>{props.text}</label>
                </div>
            </div>
            <div className='delete__task' onClick={onDeleteHandler} onMouseEnter = {onMouseEnterhadler} onMouseLeave = {onMouseLeaveHandler}>  
                <img src={deleteImg} alt="" />
            </div>
        </div>
    )
}

export default Task