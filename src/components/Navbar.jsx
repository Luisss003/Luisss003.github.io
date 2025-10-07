import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navLink}>Home</Link>
      <Link to="/projects" className={styles.navLink}>Projects</Link>
      <Link to="/skills" className={styles.navLink}>Skills</Link>
      <Link to="/contact" className={styles.navLink}>Contact</Link>
    </nav>
  );
}
