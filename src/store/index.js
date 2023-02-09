import { createContext } from "react";

//dichiariamo lo stato iniziale, il quale al suo interno avrà:
const initialState = { 
    noteList: JSON.parse(localStorage.getItem("note-list")) || [], 
    initialNoteList: JSON.parse(localStorage.getItem("initial-note-list")) || [],
    user: {
        username: localStorage.getItem("Note-app-username")
    }
}

//dichiariamo la constante Application Context che sarà uguale al createContext con all'interno l'initialState e che verrà importata nel componente padre dell'applicazione, in questo caso App
const ApplicationContext = createContext(initialState) 
export {initialState, ApplicationContext}