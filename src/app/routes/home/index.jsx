import { Routes, Route } from 'react-router-dom';
import styles from "./styles.module.scss";
import NavBar from "../../../containers/ui/navbar";
import Sidebar from "../../../containers/layout/aside";
import ProductCarousel from "../../../containers/ui/productcarousel";
import HomeImage from "../../../containers/ui/tempimage";
import ProductGrid from "../../../containers/ui/productgrid";

function Home() {
  return (
    <>
      <div className={styles.displayFlex}>
        <div>
          <NavBar />
        </div>
        <Sidebar logoEnabled={false}/>
        <div className={styles.test}>
          <HomeImage scale={0.8} />
          <div className={styles.home}>
            <ProductCarousel scale={0.8} />
          </div>
        </div>
      </div>
      <div className={styles.grid}>
          <div className={styles.sale}>
            <ProductGrid/>
          </div>
        </div>
    </>
  );
}

export default Home;
