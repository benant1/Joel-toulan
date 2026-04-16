import styles from "./AboutJoel.module.css";

const milestones = [
  {
    year: "2022",
    title: "Premier pas sur TikTok",
    description: "Débuts sur TikTok avec du contenu sur l'entrepreneuriat digital et la monétisation d'audience.",
    icon: "/icons8-tic-tac.gif",
  },
  {
    year: "2023",
    title: "300K+ Followers TikTok",
    description: "Construction d'une audience engagée de plus de 300K followers sur TikTok en Afrique.",
    icon: "/icons8-tic-tac.gif",
  },
  {
    year: "2023-2024",
    title: "Expansion YouTube",
    description: "Lancement et développement d'une chaîne YouTube avec stratégies éprouvées et 80K+ abonnés.",
    icon: "/icons8-youtube-48.png",
  },
  {
    year: "2024",
    title: "Fondation d'IZI Mentor",
    description: "Co-création d'une communauté privée dédiée aux entrepreneurs africains pour passer à l'action.",
    icon: "https://scontent.cdninstagram.com/v/t51.82787-19/515074329_17855279904465248_6615650804311937689_n.jpg?stp=cp0_dst-jpg_s110x80_tt6&_nc_cat=111&ccb=7-5&_nc_sid=bf7eb4&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy40MDQuQzMifQ%3D%3D&_nc_ohc=37oMV7CGarQQ7kNvwHNUjt5&_nc_oc=AdptjLB3iB2yoDAUjQVbwEQIticE3pp0CCe2z01MUOMj9052Qyj4Y2xkn0Db9F6r6lY&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=7ZE1_JJ8PrFdEPwOAy9NIA&_nc_ss=7a2a8&oh=00_Af3wnjDfztXjPj48doGu63DJrcRhdHQimZUxiRAxUQJlDg&oe=69E69C9A",
  },
];

const challenges = [
  "Surmonter les doutes initiaux sur la viabilité du business digital en Afrique",
  "Construire une audience qualifiée et engagée plutôt que de chercher des chiffres",
  "Créer des produits et services alignés avec les vrais besoins de son audience",
  "Transitionner d'un statut de créateur de contenu à entrepreneur et mentor",
  "Bâtir une communauté de confiance et mener par l'exemple",
];

export function AboutJoel() {
  return (
    <section className={styles.about}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionSubtitle}>Histoire</p>
        <h2>L'histoire de Joël Toulan</h2>
      </div>

      <div className={styles.aboutContent}>
        <div className={styles.introSection}>
          <p className={styles.introText}>
            Je m'appelle Joël Toulan, et j'ai commencé dans le digital sans moyens ni direction claire. Au début, j'ai testé plusieurs business en ligne comme le <span className={styles.highlight}>dropshipping</span> et le marketing digital, en enchaînant les <span className={styles.highlight}>échecs</span>, mais chaque expérience m'a permis d'apprendre et de progresser. Progressivement, j'ai compris que la clé n'était pas seulement de vendre, mais de <span className={styles.highlight}>capter l'attention</span>. Je me suis alors lancé dans la création de contenu sur <span className={styles.highlight}>TikTok</span>, en publiant régulièrement des vidéos autour du business et de la motivation. Avec le temps, mon audience a grandi et j'ai transformé cette visibilité en opportunité en lançant des <span className={styles.highlight}>formations</span> et en accompagnant d'autres personnes. J'ai ensuite cofondé <span className={styles.highlight}>IZI Mentor</span>, une communauté dédiée à aider les entrepreneurs à <span className={styles.highlight}>passer à l'action</span> et à générer des revenus en ligne. Aujourd'hui, je continue de développer mon activité dans le digital, avec une seule conviction : avec de la <span className={styles.highlight}>discipline</span>, de la <span className={styles.highlight}>régularité</span> et du <span className={styles.highlight}>passage à l'action</span>, il est possible de réussir en partant de zéro.
          </p>
        </div>

        <div className={styles.milestonesSection}>
          <h3 className={styles.subTitle}>Parcours & Accomplissements</h3>
          <div className={styles.timeline}>
            {milestones.map((milestone, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineIcon}>
                  {milestone.icon.startsWith('/') || milestone.icon.startsWith('http') ? (
                    <img src={milestone.icon} alt="" style={{ width: '24px', height: '24px' }} />
                  ) : (
                    milestone.icon
                  )}
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{milestone.year}</div>
                  <div className={styles.timelineTitle}>{milestone.title}</div>
                  <div className={styles.timelineDescription}>{milestone.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>300K+</div>
            <div className={styles.statType}>Followers TikTok</div>
            <div className={styles.statDesc}>Communauté engagée en croissance constante</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>80K+</div>
            <div className={styles.statType}>Abonnés YouTube</div>
            <div className={styles.statDesc}>Contenus structurés et éducatifs</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statValue}>50M+</div>
            <div className={styles.statType}>Vues Cumulées</div>
            <div className={styles.statDesc}>Impact et portée du message</div>
          </div>
        </div>

        <div className={styles.challengesSection}>
          <h3 className={styles.subTitle}>Les Défis Relevés</h3>
          <div className={styles.challengesList}>
            {challenges.map((challenge, index) => (
              <div key={index} className={styles.challengeItem}>
                <span className={styles.challengeIcon}>✓</span>
                <p>{challenge}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.communitySection}>
          <h3 className={styles.subTitle}>IZI Mentor - La Communauté</h3>
          <p className={styles.communityText}>
            Au-delà des chiffres, Joël a créé <strong>IZI Mentor</strong>, une communauté privée et sélective
            d'entrepreneurs africains ambitieux. Cet écosystème regroupe des individus qui ont décidé de
            transformer leur audience en revenus, d'automatiser leurs systèmes, et de construire un business
            durable et scalable.
          </p>
          <p className={styles.communityText}>
            Ses mentorés incluent des créateurs de contenu, des entrepreneurs, des développeurs et des
            professionnels qui ont tous bénéficié de son accompagnement direct pour atteindre leurs objectifs.
          </p>
        </div>

        <div className={styles.philosophySection}>
          <h3 className={styles.subTitle}>La Philosophie</h3>
          <div className={styles.philosophyCards}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <img src="/globe.svg" alt="" style={{ width: '32px', height: '32px' }} />
              </div>
              <div className={styles.cardTitle}>Action &gt; Théorie</div>
              <p>Les stratégies ne valent que si elles sont testées et appliquées sur le terrain.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🌱</div>
              <div className={styles.cardTitle}>Croissance continue</div>
              <p>Chaque défi est une opportunité d'apprendre et d'évoluer.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <img src="/icons8-facebook-nouveau-48.png" alt="" style={{ width: '32px', height: '32px' }} />
              </div>
              <div className={styles.cardTitle}>Communauté</div>
              <p>Le succès collectif surpasse le succès individuel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
