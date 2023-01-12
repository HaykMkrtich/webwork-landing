import styles from './TabContent.module.scss';
import image from './assets/tab_image.png';
import Button from '../../../common/Button';

function TabContent({ title }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <ul>
          <li>4 Screenshot Modes</li>
          <li>Idle Time Tracking</li>
          <li>Synchronized Tracking</li>
          <li>Billable Hours</li>
        </ul>
        <Button>Reserve your seat</Button>
      </div>
      <img src={image} alt="tab image" />
    </div>
  );
}

export default TabContent;
