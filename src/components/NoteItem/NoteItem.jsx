import { useContext } from "react"
import { ApplicationContext } from "../../store"
import styles from "./NoteItem.module.scss"

const NoteItem = ({data}) => {

    const {dispatch} = useContext(ApplicationContext)

    const onHandleClick = () => {
        dispatch({type: "ON_DELETE_NOTE", payload: data.id})
    }

  return (
    <div className={styles.NoteItem}>
      <div className={styles.containerNoteItem}>
        <h1>{data.title}</h1>
        <button onClick={onHandleClick}>X</button>
      </div>
      <p>{data.content}</p>

    </div>
  )
}

export default NoteItem