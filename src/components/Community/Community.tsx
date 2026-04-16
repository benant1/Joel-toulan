import Image from "next/image";
import styles from "./Community.module.css";

const communityStats = [
  { title: "300K+ abonnés TikTok", description: "Une présence forte sur TikTok pour accélérer la visibilité de vos offres.", icon: "/icons8-tic-tac.gif" },
  { title: "80K+ abonnés YouTube", description: "Des contenus vidéo structurés pour convertir votre audience en clients fidèles.", icon: "/icons8-youtube-48.png" },
  { title: "50M+ vues cumulées", description: "Des stratégies qui fonctionnent sur les réseaux, adaptées au marché africain.", icon: "👁️" },
];

export function Community() {
  return (
    <section className={styles.community}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionSubtitle}>IZI Mentor</p>
        <h2>Une communauté d’action et de résultats</h2>
      </div>

      <div className={styles.communityGrid}>
        <article className={`${styles.communityCard} ${styles.joelCard}`}>
          <div className={styles.joelImageWrapper}>
            <Image
              src="https://izimentor.com/wp-content/uploads/fluent-community/fluentcom-514d6d0639b9fcca6111b4aa5914136b-fluentcom-1002604937.webp"
              alt="Joël Toulan - Co-fondateur IZI Mentor"
              width={400}
              height={400}
              className={styles.joelImage}
            />
          </div>
          <h3>Joël Toulan</h3>
          <p>Co-fondateur • Entrepreneur Digital • IZI Mentor</p>
        </article>

        <div className={styles.statsContainer}>
          {communityStats.map((stat, index) => (
            <article key={stat.title} className={`${styles.communityCard} ${styles[`stat${index + 1}`]}`}>
              <div className={styles.statIcon}>
                {stat.icon.startsWith('/') ? (
                  <img src={stat.icon} alt="" style={{ width: '40px', height: '40px' }} />
                ) : (
                  stat.icon
                )}
              </div>
              <h3>{stat.title}</h3>
              <p>{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
