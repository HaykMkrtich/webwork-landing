import styles from './Badges.module.scss';
import CenterBlock from '../common/CenterBlock';
import badges from './assets/badges.png';

function Badges() {
  return (
    <CenterBlock width={1600} className={styles.wrapper}>
      <img src={badges} alt="badges" />
    </CenterBlock>
  );
}
export default Badges;
