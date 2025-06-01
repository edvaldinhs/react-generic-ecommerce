import Sidebar from "../../../containers/layout/aside";
import styles from "./styles.module.scss";

function Cart() {
    return (
        <div className={styles.displayFlex}>
            <Sidebar logoEnabled={true}/>
            <div className={styles.container}>
                <h1>Oi bom dia</h1>
            </div>
        </div>
    )
}

export default Cart