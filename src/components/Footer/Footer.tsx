import styles from "./Footer.module.css";

const socialLinks = [
  { name: "YouTube", href: "https://www.youtube.com/@joel_toulan", icon: "/icons8-youtube-48.png" },
  { name: "TikTok", href: "https://www.tiktok.com/@joel_toulan", icon: "/icons8-tic-tac.gif" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/joel-toulan", icon: "/icons8-linkedin-48.png" },
  { name: "Instagram", href: "https://instagram.com/joel_toulan", icon: "/icons8-instagram-48.png" },
  { name: "Facebook", href: "https://www.facebook.com/joel.toulan", icon: "/icons8-facebook-nouveau-48.png" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <p className={styles.footerBrand}>Joel Toulan</p>
          <p className={styles.footerText}>
            Entrepreneur digital, créateur de contenu et mentor IZI Mentor pour les jeunes africains vers
            l’indépendance financière.
          </p>          <div className={styles.socialLinksContainer}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                title={link.name}
              >
                <img src={link.icon} alt={link.name} />
              </a>
            ))}
            <a href="mailto:support@izimentor.com" className={styles.socialIcon} title="Email">
              <img src="/icons8-gmail.gif" alt="Email" />
            </a>
          </div>        </div>
        <div className={styles.footerLinks}>
          <a href="#services">Services</a>
          <a href="#work">Programmes</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© 2026 Joël Toulan. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
