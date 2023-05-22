import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {calculateTotals} from "./feature/cart/cartSlice";

function App() {
    const dispatch = useDispatch();
    const {cartItems} = useSelector(state => state.cart);
    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems, dispatch]);

    return (
      <main>
        <Navbar />
          <CartContainer />
      </main>
    );
}
export default App;
