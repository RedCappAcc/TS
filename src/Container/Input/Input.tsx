import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/actions/action'
import { Itodo } from '../../store/actions/actionInterface'
import './input.css'
const arrowImg = require('./img/arrow.png')


function Input(){
    const dispatch = useDispatch() 
    let [input, setInput] = useState<string>('')
    function onChangeHadler(e:React.ChangeEvent<HTMLInputElement>){
        setInput(e.currentTarget.value)
    }
    function onClickHadler(){
        let todo:Itodo = {status:false,text:input}
        dispatch(addTodo(todo))
        setInput('')
    }
    function onPressEnter(e:React.KeyboardEvent){
        if(e.key==='Enter'){
            let todo:Itodo = {status:false,text:input}
            dispatch(addTodo(todo))
            setInput('')
        }
    }
    return(
        <div className="inputSearch" onKeyPress={onPressEnter}>
            <input onChange={onChangeHadler} type="text" placeholder='Введите задачу...' value={input}/>
            <button onClick={onClickHadler}><img src={arrowImg} alt=""/></button>
        </div>
    )
}

export default Input