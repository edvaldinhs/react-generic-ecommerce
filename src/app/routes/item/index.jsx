import styles from "./styles.module.scss";

function Item(){
    return (
        <div className={styles.displayFlex}>
            <Sidebar logoEnabled={true}/>
            <h1>Oi bom dia</h1>
        </div>
    )
}

export default Item