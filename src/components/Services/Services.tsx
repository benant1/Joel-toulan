import styles from "./Services.module.css";

type Service = {
  title: string;
  description: string;
  icon?: string;
};

interface ServicesProps {
  services: Service[];
}

export function Services({ services }: ServicesProps) {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionSubtitle}>Je peux vous accompagner</p>
        <h2>Services professionnels</h2>
      </div>

      <div className={styles.serviceGrid}>
        {services.map((service, index) => (
          <article key={service.title} className={`${styles.serviceCard} ${styles[`service${index + 1}`]}`}>
            {service.icon && (
              <div className={styles.serviceIcon}>
                {service.icon.startsWith('/') ? (
                  <img src={service.icon} alt="" style={{ width: '40px', height: '40px' }} />
                ) : (
                  service.icon
                )}
              </div>
            )}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="https://izimentor.com" target="_blank" rel="noopener noreferrer" className={styles.serviceLink}>Découvrir plus →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
