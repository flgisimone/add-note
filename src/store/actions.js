//Questo file js viene utilizzato e dichiarare le varie azioni all'interno dello userReducer

export const actions ={
    ADD_NEW_NOTE: "ADD_NEW_NOTE", //azione per aggiungere una nuova nota
    SET_USERNAME: "SET_USERNAME", //azione per aggiungere l'username al login e al local storage
    REMOVE_USERNAME: "REMOVE_USERNAME", //azione per rimuovere l'username al logout e dal local storage
    ON_SEARCH_NOTE: "ON_SEARCH_NOTE", //azione per il filtro delle parole nella searchbar
    ON_DELETE_NOTE: "ON_DELETE_NOTE" //azione per cancellare una nota
}