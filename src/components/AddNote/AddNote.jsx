import React, { useContext, useState } from 'react'
import { ApplicationContext } from '../../store'
import styles from "./AddNote.module.scss"

const AddNote = () => {
    const {dispatch} = useContext(ApplicationContext)

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const onHandleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: "ADD_NEW_NOTE",
            payload: {
                id: Math.floor(Math.random() * 1000),
                title,
                content,
            },
        })
        setTitle(() => "")
        setContent(() => "")
    }

  return (
    <div className={styles.AddNote}>
        <h2>Aggiunta nota</h2>
        <form onSubmit={onHandleSubmit} className={styles.formNote}>
            <input 
            type="text" 
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(() => e.target.value)}
            placeholder="Inserisci il titolo"
            required
            />
            <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(() => e.target.value)}
            placeholder="Inserisci la descrizione"
            required
            />
            <input type="submit" 
            value="Aggiungi una nuova nota"
            />
        </form>
    </div>
  )
}

export default AddNote