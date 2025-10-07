import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <h1 className={styles.heading}>Skills and Technologies</h1>

      <ul className={styles.skillsList}>
        <li className={styles.skillItem}>
          <strong>Languages:</strong> C, Python, Java, Bash, JavaScript/TypeScript
        </li>
        <li className={styles.skillItem}>
          <strong>Frameworks:</strong> Express.js, Spring Boot, React
        </li>
        <li className={styles.skillItem}>
          <strong>DevOps / Cloud:</strong> Docker, Kubernetes (Kind), Proxmox VE, AWS (EC2, IAM, S3)
        </li>
        <li className={styles.skillItem}>
          <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB
        </li>
        <li className={styles.skillItem}>
          <strong>Secure Code Analysis & Debugging:</strong> Ghidra, GDB, x64dbg, Assembly (x86, x86-64, ARM64)
        </li>
        <li className={styles.skillItem}>
          <strong>Development Tools:</strong> Git, ORMs/ODMs (Mongoose, Prisma, Hibernate), Passport.js (JWT), Postman
        </li>
      </ul>
    </div>
  );
}
