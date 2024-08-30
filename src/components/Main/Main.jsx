import styles from "./Main.module.css"

function Main(){
    return(
        <div className={styles.Main}>
            <div className={styles.criar}>
                <input type="text" />
                <button>+</button>
            </div>

            <div className={styles.lista}>
                <div className={styles.item}>
                    <p>item</p> 
                    <button className="exluir">X</button>

                </div>

            </div>
        </div>
    )

}


export default Main

