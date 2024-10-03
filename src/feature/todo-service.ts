import { store } from "../model/model"
import { ToDo } from "../model/todo"
import { produce } from "immer"

const BASEURL = "https://jsonplaceholder.typicode.com/todos"

export async function loadAllToDos() {
    const response = await fetch(BASEURL)
    const todos: ToDo[] = (await response.json())           // .filter(x => x.completed === false)
    
    const next = produce(store.getValue(), model => {
        model.todos = todos
    })
    store.next(next)
}