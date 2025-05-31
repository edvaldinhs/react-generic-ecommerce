import React from "react";
import styles from './styles.module.scss';

function NavBar() {
  return (
    
    <header className={styles['header-container']}>
      <h1><a href="#">E-Commerce</a></h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#guide">Guide</a></li>
          <li><a href="#dunno">Dunno</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
