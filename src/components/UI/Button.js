import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button className = {styles.btn} onClick={props.onClick} type='submit'>{props.children}</button>
  );
}

export default Button;