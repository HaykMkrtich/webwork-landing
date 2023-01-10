import styles from './Prices.module.scss';
import PriceCard from './components/PriceCard';

function Prices() {
  const benefits = ['14-day Free Trial', 'Access to All Features', '24/7 Support'];
  return (
    <div className={styles.wrapper}>
      <h2>
        Benefit both ways - <em>monthly or yearly</em>
      </h2>
      <div className={styles.price_cards}>
        <PriceCard
          title="Monthly"
          price="$2.49"
          oldPrice="$4.99"
          benefits={benefits}
          caption="*for 6 months"
          bonus="50%"
        />
        <PriceCard
          title="Yearly"
          price="$2.05"
          oldPrice="$4.09"
          benefits={benefits}
          bonus="50%"
          extraBonus="18%+"
        />
      </div>
    </div>
  );
}

export default Prices;
