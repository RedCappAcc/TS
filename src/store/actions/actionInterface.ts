export interface Itodo{
    status:boolean,
    text:string,
    id:number
}

export interface IInitialState{
    todos:Itodo[]
    activeTodo:number
}

export interface IAction{
    type:string,
    payload?:any
}

export enum actionsTypes{
    INIT_TODO = 'INIT_TODO',
    ADD_TODO = 'ADD_TODO',
    EDIT_STATUS = 'EDIT_STATUS',
    DELETE_TODO = 'DELETE_TODO',
    EDIT_ACTIVE_TODO = 'EDIT_ACTIVE_TODO'
}