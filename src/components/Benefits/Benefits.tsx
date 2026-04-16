import styles from "./Benefits.module.css";

type Benefit = {
  title: string;
  description: string;
  icon?: string;
};

interface BenefitsProps {
  benefits: Benefit[];
}

export function Benefits({ benefits }: BenefitsProps) {
  const benefitsWithIcons = benefits.map((benefit, index) => ({
    ...benefit,
    icon: ["/icons8-approche-méthodique-100.png", "/icons8-femme-d'affaires-64.png", "/icons8-sourd-50.png"][index] || "✨",
  }));

  return (
    <section className={styles.benefits}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionSubtitle}>Pourquoi me choisir</p>
        <h2>Une méthode orientée résultats</h2>
      </div>

      <div className={styles.benefitGrid}>
        {benefitsWithIcons.map((benefit, index) => (
          <article key={benefit.title} className={`${styles.benefitCard} ${styles[`benefit${index + 1}`]}`}>
            <div className={styles.benefitIcon}>
              {benefit.icon.startsWith('/') ? (
                <img src={benefit.icon} alt="" style={{ width: '32px', height: '32px' }} />
              ) : (
                benefit.icon
              )}
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
