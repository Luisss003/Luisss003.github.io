import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.heading}>Hi, I'm Luis Saenz</h1>
      <p className={styles.tagline}>
        Backend Developer | Low-Level Programming | Security Enthusiast
      </p>
      <p className={styles.text}>Computer Science Graduate @ UTSA</p>
      <div className={styles.ctaContainer}>
        <a href="#projects" className={styles.ctaPrimary}>View Projects</a>
        <a href="#contact" className={styles.ctaSecondary}>Contact Me</a>
      </div>
    </div>
  );
}
