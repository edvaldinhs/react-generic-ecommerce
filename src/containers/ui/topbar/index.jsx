import { FaSearch, FaSlidersH } from "react-icons/fa";
import messageIcon from "../icons/mess.svg";
import bellIcon from "../icons/bell.svg";
import styles from "./styles.module.scss";

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.searchBar}>
        <FaSearch className={`${styles.icon} ${styles.searchIcon}`} />
        <input
          type="text"
          placeholder="Search Product"
          className={styles.searchInput}
        />
        <FaSlidersH className={`${styles.icon} ${styles.slidersIcon}`} />
      </div>

      <div className={styles.actions}>
        <IconButton src={messageIcon} alt="Messages" />
        <IconButton src={bellIcon} alt="Bell" />
        <ProfileAvatar/>
      </div>
    </div>
  );
}

function IconButton({ src, alt }) {
  return (
    <div className={styles.iconButton}>
      <img src={src} alt={alt} className={styles.icon} />
    </div>
  );
}

function ProfileAvatar() {
  return (
    <img
      src="https://i.pravatar.cc/40?img=5"
      alt="Profile"
      className={styles.profileAvatar}
    />
  );
}
