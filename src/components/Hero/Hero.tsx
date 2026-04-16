import Image from "next/image";
import styles from "./Hero.module.css";

type SocialLink = {
  name: string;
  href: string;
  emoji: string;
};

interface HeroProps {
  socialLinks: SocialLink[];
}

const heroStats = [
  { value: "300K+", label: "abonnés TikTok", icon: "/icons8-tic-tac.gif" },
  { value: "80K+", label: "abonnés YouTube", icon: "/icons8-youtube-48.png" },
  { value: "50M+", label: "vues cumulées", icon: "👁️" },
];

export function Hero({ socialLinks }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.label}>Entrepreneur digital • TikTok • YouTube • IZI Mentor</p>
        <h1>
          Audience → Revenus.<br />C'est mon expertise.
        </h1>
        <p className={styles.description}>
          Après plusieurs tests de modèles en ligne, des échecs et des apprentissages, je partage
          aujourd’hui des stratégies claires sur TikTok, YouTube et l’accompagnement entrepreneurial
          pour l’Afrique.
        </p>
        <div className={styles.heroStats}>
          {heroStats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <div className={styles.statIcon}>
                {stat.icon.startsWith('/') ? (
                  <img src={stat.icon} alt="" style={{ width: '28px', height: '28px' }} />
                ) : (
                  stat.icon
                )}
              </div>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
        <div className={styles.heroActions}>
          <a className={styles.primaryButton} href="#work">
            Démarrer maintenant
          </a>
          <a className={styles.secondaryButton} href="#contact">
            Parler de mon projet
          </a>
        </div>

        <div className={styles.heroFooter}>
          <p>
            <img 
              src="https://scontent.cdninstagram.com/v/t51.82787-19/515074329_17855279904465248_6615650804311937689_n.jpg?stp=cp0_dst-jpg_s110x80_tt6&_nc_cat=111&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy40MDQuQzMifQ%3D%3D&_nc_ohc=37oMV7CGarQQ7kNvwHNUjt5&_nc_oc=AdptjLB3iB2yoDAUjQVbwEQIticE3pp0CCe2z01MUOMj9052Qyj4Y2xkn0Db9F6r6lY&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=7ZE1_JJ8PrFdEPwOAy9NIA&_nc_ss=7a2a8&oh=00_Af3wnjDfztXjPj48doGu63DJrcRhdHQimZUxiRAxUQJlDg&oe=69E69C9A"
              alt="IZI Mentor"
              style={{ width: '20px', height: '20px', marginRight: '6px', display: 'inline-block' }}
            /> 
            Rejoins des centaines d'entrepreneurs qui ont transformé leur audience en revenus.
          </p>
          <div className={styles.heroFeatures}>
            <span><img src="/icons8-tic-tac.gif" alt="" style={{ width: '20px', height: '20px', marginRight: '6px' }} /> Stratégies TikTok</span>
            <span><img src="/icons8-youtube-48.png" alt="" style={{ width: '20px', height: '20px', marginRight: '6px' }} /> Croissance YouTube</span>
            <span><img src="/image.png" alt="" style={{ width: '20px', height: '20px', marginRight: '6px' }} /> Accompagnement</span>
            <span>🛍️ Produits Digitaux</span>
          </div>
        </div>
      </div>

      <aside className={styles.heroCard}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/joel-toulan.png"
            alt="Joël Toulan - Entrepreneur Digital"
            width={400}
            height={400}
            priority
            className={styles.heroImage}
          />
        </div>
        <span className={styles.heroBadge}>IZI Mentor</span>
        <h2>Un écosystème pour l’action</h2>
        <p>
          Co-fondateur de la communauté privée IZI Mentor, je construis un réseau d’accompagnement
          dédié aux entrepreneurs africains qui veulent passer à l’action.
        </p>
        <div className={styles.heroStats}>
          {heroStats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
