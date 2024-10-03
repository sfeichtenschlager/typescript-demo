import { store } from "../model/model"
import { produce } from "immer"
import { User } from "../model/user"

const BASEURL = "https://jsonplaceholder.typicode.com/users"

export async function loadAllUsers() {
    const response = await fetch(BASEURL)
    const users: User[] = await response.json()
    
    const next = produce(store.getValue(), model => {
        model.users = users
    })
    store.next(next)
}