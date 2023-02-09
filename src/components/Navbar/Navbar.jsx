import {useContext} from "react";
import { ApplicationContext } from "../../store";
import styles from "Navbar.module.scss";

const Navbar = () => {

    const { state, dispatch } = useContext(ApplicationContext);
    
  return (
    <div className={styles.Navbar}>
        <h2>{state.user.username}</h2>
    </div>
  )
}

export default Navbar