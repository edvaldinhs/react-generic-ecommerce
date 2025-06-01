import {
  Home,
  Compass,
  Heart,
  ShoppingCart,
  CreditCard,
  User,
  Clock,
  MessageSquare,
  Settings,
  ShoppingBag,
} from 'lucide-react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { icon: <Home size={20} />, label: 'Home', path: '/' },
  { icon: <Compass size={20} />, label: 'Explore', path: '/explore' },
  { icon: <Heart size={20} />, label: 'Saved', path: '/saved' },
  { icon: <ShoppingCart size={20} />, label: 'Cart', path: '/cart' },
  { icon: <CreditCard size={20} />, label: 'Payment', path: '/payment' },
  { icon: <User size={20} />, label: 'Profile', path: '/profile' },
  { icon: <Clock size={20} />, label: 'Purchase History', path: '/history' },
  { icon: <MessageSquare size={20} />, label: 'Contact Us', path: '/contact' },
  { icon: <Settings size={20} />, label: 'Settings', path: '/register' },
];

function Sidebar({ logoEnabled = false }) {
  const navigate = useNavigate();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div
          className={`${styles.iconWrapper} ${logoEnabled ? styles["withGradient"] : ""}`}
        >
          <ShoppingBag color="white" size={28} />
        </div>
        <span className={`${styles.label} ${logoEnabled ? styles.withGradient : ''}`}>
          GECCO
        </span>
      </div>
      <nav className={styles.nav}>
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={styles.menuItem}
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}


export default Sidebar