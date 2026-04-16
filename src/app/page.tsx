import styles from "./page.module.css";
import { promoText, socialLinks, services, programs, benefits } from "./pageData";
import { PromoBar } from "../components/PromoBar/PromoBar";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { AboutJoel } from "../components/AboutJoel/AboutJoel";
import { Services } from "../components/Services/Services";
import { Benefits } from "../components/Benefits/Benefits";
import { Community } from "../components/Community/Community";
import { Programs } from "../components/Programs/Programs";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PromoBar text={promoText} />
        <Header />
        <Hero socialLinks={socialLinks} />
        <AboutJoel />
        <Services services={services} />
        <Benefits benefits={benefits} />
        <Community />
        <Programs programs={programs} />
        <Contact socialLinks={socialLinks} />
        <Footer />
      </main>
    </div>
  );
}
