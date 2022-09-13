import styles from "../css/Navigator.module.css"

function Navigator({currentElement}){
    const list = ["Home", "Tab1", "Tab2", "Tab3"];

    return(
        <div>
            {list.map(element => (
                currentElement === element ? 
                <div className={styles.this}>{element}</div>
                :
                <div className={styles.normal}>{element}</div>
            ))}
        </div>
    )


}


export default Navigator;