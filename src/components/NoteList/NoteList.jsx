import {useContext} from "react"
import { ApplicationContext } from "../../store"
import NoteItem from "../NoteItem/NoteItem"

import styles from "./NoteList.module.scss"

const NoteList = () => {
    const {state} = useContext(ApplicationContext)

  return (
    <div className={styles.NoteList}>
        {
            state.noteList.map((note) => (
                <NoteItem data={note} key={note.id}/>
            ))
        }
    </div>
  )
}

export default NoteList