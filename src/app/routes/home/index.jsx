import React, { useRef, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import NavBar from "../../../containers/ui/navbar";
import Sidebar from "../../../containers/layout/aside";
import ProductCarousel from "../../../containers/ui/productcarousel";

function Home() {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
    <div className={styles.displayFlex}>

    
      <Sidebar/>
      {/* <div ref={navRef}>
        <NavBar />
      </div> */}
      <div className={styles.test} style={{ marginTop: navHeight }}>
        <div className={styles.home}>
          <ProductCarousel scale={0.85}/>
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;
