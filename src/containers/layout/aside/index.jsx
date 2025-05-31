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

const menuItems = [
  { icon: <Home size={20} />, label: 'Home' },
  { icon: <Compass size={20} />, label: 'Explore' },
  { icon: <Heart size={20} />, label: 'Saved' },
  { icon: <ShoppingCart size={20} />, label: 'Cart' },
  { icon: <CreditCard size={20} />, label: 'Payment' },
  { icon: <User size={20} />, label: 'Profile' },
  { icon: <Clock size={20} />, label: 'Purchase History' },
  { icon: <MessageSquare size={20} />, label: 'Contact Us' },
  { icon: <Settings size={20} />, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.iconWrapper}>
          <ShoppingBag color="white" size={28} />
        </div>
        <span className={styles.label}>GECCO</span>
      </div>
      <nav className={styles.nav}>
        {menuItems.map((item, index) => (
          <button key={index} className={styles.menuItem}>
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
