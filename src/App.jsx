import AddNote from './components/AddNote/AddNote'
import NoteContent from "./components/NoteContent/NoteContent"

import styles from './App.module.scss'

import { ApplicationContext } from './store'
import { useReducer } from 'react'
import { initialState } from "./store"
import { globalReducer } from "./store/reducers"

function App() {

  //Dichiaramo un'array contenente lo state e il dispatch corrispondenti agli argomenti all'interno dello useReducer
    // state -> initialState
    // dispatch -> globalReducer
  const [state, dispatch] = useReducer(globalReducer, initialState) 

  return (
    <div className={styles.App}>
      <ApplicationContext.Provider value={{state, dispatch}}> {/*Assegniamo all'ApplicationContext lo state, stato iniziale modificato, e il dispatch, per eseguire il mutamento con il reducer*/}
      
            <main>
              <AddNote />
              <NoteContent />
            </main>

      </ApplicationContext.Provider>
    </div>
  )
}

export default App
