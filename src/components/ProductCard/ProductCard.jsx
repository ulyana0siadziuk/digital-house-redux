import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Button from "../Button/Button.jsx";
import QuantitySelector from "../QuantitySelector/QuantitySelector.jsx";
import starIcon from "../../assets/star.svg";
import { addToCart } from "../../store/cartSlice";
import styles from "./ProductCard.module.css";

function ProductCard({ id, title, description, image, price, rating }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        price,
        quantity,
      }),
    );
  };

  return (
    <article className={styles.card}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.meta}>
          <p className={styles.price}>{price} BYN</p>
          <span className={styles.rating}>
            <img className={styles.star} src={starIcon} alt="" />
            {rating}
          </span>
        </div>
        <QuantitySelector onChange={setQuantity} />
        <Button onClick={handleAddToCart} withCartIcon>
          В корзину
        </Button>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ProductCard;
