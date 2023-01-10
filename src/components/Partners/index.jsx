import * as images from './assets';
import styles from './Partners.module.scss';

function Partners() {
  return (
    <div className={styles.wrapper}>
      <h2>Trusted by 1000+ Companies</h2>
      <div className={styles.logos}>
        {Object.values({ ...images }).map((el) => (
          <img src={el} alt="partner logo" />
        ))}
      </div>
    </div>
  );
}

export default Partners;
