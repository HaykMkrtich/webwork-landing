import logo from './assets/logo.svg';
import Button from '../common/Button';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.wrapper}>
      <img src={logo} alt="logo" />
      <Button outline>Get now</Button>
    </header>
  );
}

export default Header;
