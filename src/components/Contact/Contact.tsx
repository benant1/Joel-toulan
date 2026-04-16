import styles from "./Contact.module.css";

type SocialLink = {
  name: string;
  href: string;
  emoji: string;
};

interface ContactProps {
  socialLinks: SocialLink[];
}

export function Contact({ socialLinks }: ContactProps) {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactCard}>
        <p className={styles.sectionSubtitle}>Disponible maintenant</p>
        <h2>Parlons de votre stratégie digitale</h2>
        <p>
          Je vous aide à tester rapidement des idées, lancer des contenus performants et
          monétiser vos premiers clients en ligne.
        </p>
        <a className={styles.primaryButton} href="mailto:support@izimentor.com">
          support@izimentor.com
        </a>
      </div>

      <div className={styles.socialsCard}>
        <h3>Retrouvez-moi sur</h3>
        <div className={styles.socials}>
          {socialLinks.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.emoji.startsWith('/') ? (
                <img src={link.emoji} alt={link.name} style={{ width: '24px', height: '24px' }} />
              ) : (
                <span>{link.emoji}</span>
              )}
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
