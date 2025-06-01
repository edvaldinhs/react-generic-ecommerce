import MyImage from './Mask group.png';
import styles from './styles.module.scss'

const HomeImage = ({ scale = 1 }) => {
  return (
    <div className={styles.homeimg}
    style={{ "--scale": scale }}
    >
      <img src={MyImage} alt="Temp" />
      <h1 className={styles.overlayText}>Week Sales</h1>
    </div>
  );
}

export default HomeImage;
