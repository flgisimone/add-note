import { useState, useContext, useReducer } from "react"
import { ApplicationContext } from "../../store"
import styles from "./Login.module.scss"

const Login = () => {

    const {dispatch } = useReducer(ApplicationContext)
    const [username, setUsername] = useState("")
    
    const onHandleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: "SET_USERNAME", payload: username})
    }

  return (
    <div className={styles.Login}>
        <h1>Login</h1>
        <form onSubmit={onHandleSubmit}>
            <input value={username}
            onChange={(e) => setUsername(() => e.target.value)}
            type="text"
            id="username"
            name="username"
            placeholder="Inserisci l'username"
             />
             <input type="submit" value="Accedi"/>
        </form>
    </div>
  )
}

export default Login