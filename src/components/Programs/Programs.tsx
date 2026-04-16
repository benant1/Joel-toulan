import Image from "next/image";
import styles from "./Programs.module.css";

type Program = {
  name: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
};

interface ProgramsProps {
  programs: Program[];
}

export function Programs({ programs }: ProgramsProps) {
  return (
    <section id="work" className={styles.work}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionSubtitle}>Programmes phares</p>
        <h2>Formations IZI Mentor</h2>
      </div>

      <div className={styles.projectGrid}>
        {programs.map((program, index) => (
          <article 
            key={program.name} 
            className={`${styles.projectCard} ${styles[`project${(index % 8) + 1}`]}`}
          >
            {program.image && (
              <div className={styles.projectThumbnail}>
                <Image
                  src={program.image}
                  alt={program.name}
                  width={300}
                  height={300}
                  className={styles.projectImage}
                  priority={false}
                />
              </div>
            )}
            <div className={styles.projectContent}>
              <h3>{program.name}</h3>
              <p>{program.description}</p>
              <div className={styles.projectTags}>
                {program.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {program.link && (
                <a href={program.link} target="_blank" rel="noopener noreferrer" className={styles.formationLink}>
                  Découvrir cette formation →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
