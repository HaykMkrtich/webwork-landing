import cn from 'classnames';
import styles from './Button.module.scss';

function Button({ outline = false, bold = true, className, ...props }) {
  return (
    <button
      className={cn(styles.wrapper, className, {
        [styles.outline]: outline,
        [styles.bold]: bold,
      })}
      {...props}
    />
  );
}

export default Button;
