import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  console.log("cartItems : ", cartItems);

  return (
    <div>
      {cartItems.map((item) => (
        <div>{item.info.name}</div>
      ))}

      <button  onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
