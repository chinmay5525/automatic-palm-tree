
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/slices/cartSlice';
import { RootState } from '../../store/store';
import './Cart.css';

const Cart = () => {
  const { items, total } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart; 