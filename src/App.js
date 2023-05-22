import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {calculateTotals} from "./feature/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
    const dispatch = useDispatch();
    const {cartItems} = useSelector(state => state.cart);
    const {isOpen} = useSelector(state => state.modal);
    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems, dispatch]);

    return (
      <main>
          {isOpen && <Modal/>}
          <Navbar />
          <CartContainer />
      </main>
    );
}
export default App;
