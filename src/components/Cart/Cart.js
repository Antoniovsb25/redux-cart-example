import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart:</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
      <h3>{totalPrice === 0 ? "Empty cart" : `Total Price: ${totalPrice}`}</h3>
    </Card>
  );
};

export default Cart;
