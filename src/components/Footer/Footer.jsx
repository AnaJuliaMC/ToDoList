import styles from "./Footer.module.css"

export function Footer(props){

    { autor, ano } = props
    return(
        <div className={styles.Footer}>
            React - {props.autor} - {props.ano}

        </div>
    )

}

