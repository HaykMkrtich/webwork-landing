import cn from 'classnames';
import styles from './CenterBlock.module.scss';

function CenterBlock({ width = 1200, children, className, ...rest }) {
  return (
    <div style={{ maxWidth: width }} className={cn(styles.wrapper, className)} {...rest}>
      {children}
    </div>
  );
}

export default CenterBlock;
