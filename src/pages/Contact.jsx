import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.heading}>Contact Me</h1>

      <p className={styles.contactItem}>
        Email:{" "}
        <a href="mailto:luissaenz@example.com" className={styles.link}>
          luissaenz@example.com
        </a>
      </p>

      <p className={styles.contactItem}>
        GitHub:{" "}
        <a
          href="https://github.com/Luisss003"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          github.com/Luisss003
        </a>
      </p>

      <p className={styles.contactItem}>
        LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/Luisss003"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          linkedin.com/in/Luisss003
        </a>
      </p>
    </div>
  );
}
