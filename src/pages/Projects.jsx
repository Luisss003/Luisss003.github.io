import styles from "./Projects.module.css";

export default function Projects() {
  const bestProjects = [
    {
      name: "LuthonBox: Malware Analysis Service",
      timeframe: "October 2024 - Present",
      tech: "Java, Spring Boot, Hibernate, QEMU",
      description: [
        "Developed backend for automated malware analysis, implementing isolated QEMU VMs using Java’s ProcessBuilder, supporting 50+ malware samples/day.",
        "Implemented structured logging and REST API integration, reducing manual analysis time by ~40%."
      ],
    },
    {
      name: "Lusoteric: Esoteric Code Challenge Backend",
      timeframe: "May 2025 - August 2025",
      tech: "TypeScript, Express.js, Prisma, Docker",
      link: "https://github.com/Luisss003/Lusoteric",
      description: [
        "Developed backend for a multi-language code challenge platform (10+ languages including esoteric) with Docker-based sandboxed execution for secure, resource-limited code validation.",
        "Implemented Passport.js JWT strategy, user accounts, and dynamic challenge creation, enabling safe execution of user-generated code with automatic cleanup and restricted network access."
      ],
    },
    {
      name: "Luvies: Movie Discovery Platform",
      timeframe: "January 2025 – Present",
      tech: "TypeScript, Express.js, Prisma, React, TMDB API",
      link: "https://github.com/Luisss003/Luvies",
      description: [
        "Developed a full-stack movie discovery app with 30+ endpoints, allowing users to explore 1,000+ micro-genre “orbs” that generate highly specific film recommendations.",
        "Designed efficient Prisma schema and integrated TMDB API for dynamic search across 500,000+ titles."
      ],
    },
    {
      name: "Proxmox Homelab Environment",
      timeframe: "September 2024 - Present",
      tech: "Proxmox VE, Docker, Linux, Kind",
      description: [
        "Deployed and maintained a virtualized homelab with 6+ VMs and Docker containers to host backend services including MySQL, MongoDB, and a personal Git server.",
        "Simulated production deployments with Kind clusters to test APIs, debug performance, and improve reliability."
      ],
    },
  ];

  const lowLevelProjects = [
    {
      name: "YouTube Content Creation (Luis' Low Level)",
      timeframe: "January 2025 - Present",
      description: [
        "Created educational YouTube content on reverse engineering and software development, reaching 1000+ viewers."
      ],
    },
    {
      name: "Grader - Software Engineering @ UTSA",
      timeframe: "August 2025 - December 2025",
      description: [
        "Assisted instructor by evaluating 90+ software development assignments weekly covering SDLC, design patterns, and implementation."
      ],
    },
  ];

  const renderProjects = (projects) =>
    projects.map((p) => (
      <li key={p.name} className={styles.projectItem}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectName}>{p.name}</h3>
          {p.timeframe && <span className={styles.timeframe}>{p.timeframe}</span>}
        </div>

        {p.tech && <p className={styles.techStack}>{p.tech}</p>}

        {p.description.map((line, i) => (
          <p key={i} className={styles.projectDescription}>{line}</p>
        ))}

        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            View on GitHub - 
          </a>
        )}
      </li>
    ));

  return (
    <div className={styles.projectsContainer}>
      <h1 className={styles.pageHeading}>Projects & Experience</h1>

      <section>
        <h2 className={styles.sectionHeading}>Best Projects</h2>
        <ul className={styles.projectList}>{renderProjects(bestProjects)}</ul>
      </section>

      <section>
        <h2 className={styles.sectionHeading}>Reverse Engineering & Low-Level Programming</h2>
        <ul className={styles.projectList}>{renderProjects(lowLevelProjects)}</ul>
      </section>
    </div>
  );
}
