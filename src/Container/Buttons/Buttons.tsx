import './Buttons.css'
import { useSelector,useDispatch } from 'react-redux'
import { IInitialState , Itodo} from '../../store/actions/actionInterface'
import { editActiveTodo, initTodo } from '../../store/actions/action'
const upImg = require('./img/up.png')
const downImg = require('./img/down.png')


function Buttons(){
    const dispatch = useDispatch()

    const selectActiveTodo = (state:IInitialState)=>state.activeTodo
    const activeTodo:number = useSelector(selectActiveTodo);

    const selectTodos = (state:IInitialState)=>state.todos
    const todosRedux:Itodo[] = useSelector(selectTodos);

    function dispatchAll(result:Itodo[],activeTodo:number):void{
        localStorage.setItem('todos',JSON.stringify(result))
        dispatch(initTodo(result))
        dispatch(editActiveTodo(activeTodo))
    }

    function onDownHadler(){
        if(activeTodo+2>todosRedux.length){
            const result = [...todosRedux]
            result[activeTodo] = todosRedux[0]
            result[0] = todosRedux[activeTodo]
            dispatchAll(result,0)
            
        }
        else{
            const result = [...todosRedux]
            result[activeTodo] = todosRedux[activeTodo+1]
            result[activeTodo+1] = todosRedux[activeTodo]
            dispatchAll(result, activeTodo+1)
        }
    }

    function onUpHadler(){
        if(activeTodo-1<0){
            const result = [...todosRedux]
            result[activeTodo] = todosRedux[todosRedux.length-1]
            result[todosRedux.length-1] = todosRedux[activeTodo]
            dispatchAll(result, todosRedux.length-1)
        }
        else{
            const result = [...todosRedux]
            result[activeTodo] = todosRedux[activeTodo-1]
            result[activeTodo-1] = todosRedux[activeTodo]
            dispatchAll(result, activeTodo-1)
        }
    }

    return(
        <div className="buttons">
            <div className='buttons__container'>
                <div onClick={onUpHadler} className="uparrow"><img src={upImg} alt="" /></div>
                <div onClick={onDownHadler} className="downarrow"><img src={downImg} alt="" /></div>
            </div>
        </div>
    )
}

export default Buttons