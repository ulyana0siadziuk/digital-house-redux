import PropTypes from "prop-types";
import cartIcon from "../../assets/cart1.svg";
import styles from "./Button.module.css";

function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  disabled = false,
  withCartIcon = false,
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {withCartIcon ? (
        <img className={styles.icon} src={cartIcon} alt="" />
      ) : null}
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  withCartIcon: PropTypes.bool,
};

export default Button;
