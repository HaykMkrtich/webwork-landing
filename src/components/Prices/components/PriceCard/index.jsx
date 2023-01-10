import styles from './PriceCard.module.scss';
import Button from '../../../common/Button';

function PriceCard({ title, price, oldPrice, benefits, caption, extraBonus, bonus }) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>
        {price} <span className={styles.old_price}>{oldPrice}</span>
      </p>
      <p className={styles.price_subtitle}>per user/month</p>
      <ul className={styles.benefits}>
        {benefits.map((benefit, index) => (
          <li key={`price_card_benfit_${index}`}>{benefit}</li>
        ))}
      </ul>
      <Button className={styles.get_deal_btn}>Get your deal</Button>
      {caption ? <p className={styles.caption}>{caption}</p> : ''}
      <div className={styles.bonuses}>
        <div className={styles.bonuses_content}>
          {extraBonus ? <p className={styles.extra_bonus}>{extraBonus}</p> : ''}
          <p>{bonus}</p>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
