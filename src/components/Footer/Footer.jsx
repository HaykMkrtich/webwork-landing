import Button from '../common/Button';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <h2>Save 50% Now</h2>
      <Button>Get my discount</Button>
    </footer>
  );
}

export default Footer;
