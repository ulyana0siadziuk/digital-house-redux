import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./QuantitySelector.module.css";

function QuantitySelector({ min = 1, max = 99, onChange }) {
  const [quantity, setQuantity] = useState(min);

  const decrease = () => {
    if (quantity > min) {
      const next = quantity - 1;
      setQuantity(next);
      onChange?.(next);
    }
  };

  const increase = () => {
    if (quantity < max) {
      const next = quantity + 1;
      setQuantity(next);
      onChange?.(next);
    }
  };

  return (
    <div className={styles.selector}>
      <button
        type="button"
        className={styles.control}
        onClick={decrease}
        disabled={quantity <= min}
      >
        −
      </button>
      <span className={styles.value}>{quantity}</span>
      <button
        type="button"
        className={styles.control}
        onClick={increase}
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
}

QuantitySelector.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
};

export default QuantitySelector;
