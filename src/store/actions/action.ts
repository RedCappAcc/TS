import { IAction, actionsTypes, Itodo} from "./actionInterface"

export function addTodo(payload:Itodo):IAction{
    const todos = localStorage.getItem('todos')
    if(todos!==null){
        localStorage.setItem('todos',JSON.stringify([...JSON.parse(todos),payload]))
    }
    else{
        localStorage.setItem('todos',JSON.stringify([payload]))
    }
    return({
        type:actionsTypes.ADD_TODO, payload:payload
    })
}

export function editStatus(text:string):IAction{
    return({
        type:actionsTypes.EDIT_STATUS,payload:text
    })
}

export function initTodo(payload:Itodo[]):IAction{
    return({
        type:actionsTypes.INIT_TODO,payload:payload
    })
}

export function deleteTodo(text:string):IAction{
    const todos = localStorage.getItem('todos')
    if(todos!==null){
        const newTodo = JSON.parse(todos).filter((el:Itodo)=>el.text!==text)
        localStorage.setItem('todos',JSON.stringify(newTodo))
        initTodo(newTodo)
    }
    return({
        type:actionsTypes.DELETE_TODO, payload:text
    })
}