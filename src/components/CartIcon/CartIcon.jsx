import { useSelector } from "react-redux";
import cartIcon from "../../assets/cart2.svg";
import { selectCartItemsCount } from "../../store/cartSlice";
import styles from "./CartIcon.module.css";

function CartIcon() {
  const count = useSelector(selectCartItemsCount);

  return (
    <button type="button" className={styles.button} aria-label="Корзина">
      <img src={cartIcon} alt="" />
      {count > 0 ? <span className={styles.badge}>{count}</span> : null}
    </button>
  );
}

export default CartIcon;
