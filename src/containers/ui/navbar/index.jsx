import styles from './styles.module.scss';
import TopBar from "../../../containers/ui/topbar";
import { ShoppingBag } from 'lucide-react';

function NavBar() {
  return (
    <header className={styles['header-container']}>
      <div className={styles.logo}>
              <div className={styles.iconWrapper}>
                <ShoppingBag color="white" size={28} />
              </div>
              <span className={styles.label}>GECCO</span>
            </div>
      
      <TopBar />
    </header>
  );
}

export default NavBar;
