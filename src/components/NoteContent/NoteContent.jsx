import { useContext } from "react"
import App from "../../App"
import { ApplicationContext } from "../../store"
import NoteList from "../NoteList/NoteList"
import styles from "./NoteContent.module.scss"

const NoteContent = () => {
    const {dispatch} = useContext(ApplicationContext)

    const onHandleSearch = (e) => {
        dispatch({type: "ON_SEARCH_NOTE", payload: e.target.value})
    }

  return (
    <div className={styles.NoteContent}>
        <h2>Lista Note</h2>
        <input
        onInput={onHandleSearch}
        type="text"
        id="search"
        name="search"
        placeholder="Cerca..."
      />
      <div className={styles.containerNoteList}>
        <NoteList />
      </div>
    </div>
  )
}

export default NoteContent