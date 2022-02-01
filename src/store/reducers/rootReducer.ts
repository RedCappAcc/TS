import{IInitialState,IAction,actionsTypes, Itodo} from '../actions/actionInterface'


const initialState:IInitialState = {
    todos:[],
    activeTodo:0
}


function rootReducer (state:IInitialState = initialState, action:IAction):IInitialState{
    switch(action.type){
        case actionsTypes.INIT_TODO:
            return({
                ...state,todos:action.payload
            })
        case actionsTypes.ADD_TODO:
            return({
                ...state,todos:[...state.todos,action.payload]
            })
        case actionsTypes.EDIT_STATUS:
            const result = state.todos.map(el=>{
                if(el.text===action.payload){
                    return({
                        text:el.text, status:!el.status
                    })
                }
                else{
                    return({
                        text:el.text, status:el.status
                    })
                }
                })
            return({
                ...state,todos:result
            })
        case actionsTypes.DELETE_TODO:
            const newTodos:Itodo[] = state.todos.filter(el=>el.text!==action.payload)
            return({
                ...state,todos:newTodos
            })
        case actionsTypes.EDIT_ACTIVE_TODO:
            return({
                ...state, activeTodo:action.payload
            })
        default:
            return(
                state
            )
    }
}

export default rootReducer