import Sidebar from "../../../containers/layout/aside";
import CartGrid from "../../../containers/ui/cartgrid";
import styles from "./styles.module.scss";

function Cart() {
    return (
        <div className={styles.displayFlex}>
            <Sidebar logoEnabled={true}/>
            <div className={styles.container}>
                <CartGrid userId={"683de4499b6258ea7d76e7ad"} />
            </div>
        </div>
    )
}

export default Cart