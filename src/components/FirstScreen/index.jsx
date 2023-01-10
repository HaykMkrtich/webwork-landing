import styles from './FirstScreen.module.scss';
import main_slide from './assets/main_slide.png';
import checkmark from './assets/checkmark.svg';
import rating_stars from './assets/rating_stars.png';
import logo_capterra from './assets/logo_capterra.png';
import logo_g2crowd from './assets/logo_g2crowd.png';
import logo_getapp from './assets/logo_getapp.png';
import Button from '../common/Button';

function FirstScreen() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>
          <span>CYBER MONDAY</span> means an even <span>bigger sale</span>
        </h1>
        <p className={styles.subtitle}>Cyber Monday saves you money, WebWork saves you time.</p>
        <Button className={styles.button}>SAVE BIG NOW</Button>

        <div className={styles.checkmark}>
          <img src={checkmark} alt="checkmark" />
          <p>
            <span>14-day free trial</span> <span>No credit card required</span>
          </p>
        </div>
        <div className={styles.rating_stars}>
          <img src={rating_stars} alt="rating stars" />
          <p>Reviews from 51K+ happy users below and beyond </p>
        </div>
        <div className={styles.logos}>
          <img src={logo_capterra} alt="logo capterra" />
          <img src={logo_g2crowd} alt="logo g2 crowd" />
          <img src={logo_getapp} alt="logo getapp" />
        </div>
      </div>
      <img src={main_slide} className={styles.main_slide} alt="main_slide" />
    </div>
  );
}

export default FirstScreen;
