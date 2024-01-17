import { ArtworkSection } from '../ContentSections/ArtworkSection';
import { BioSection } from '../BioSection/BioSection';
import { Header } from '../Header/Header';
import { HelloSection } from '../HelloSection/HelloSection';
import SplashSection from '../SplashSection/SplashSection';
import styles from './Home.module.scss';
import { StreetwearSection } from '../ContentSections/StreetwearSection';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <SplashSection />
      <div className={styles.infoContainer}>
        <HelloSection />
        <BioSection />
      </div>
      <div className={styles.content}>
        <ArtworkSection />
        <StreetwearSection />
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export { Home };
