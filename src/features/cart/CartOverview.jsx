import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (totalCartQuantity === 0) return null;
  return (
    <div className="text-w md:text-basemy-10 flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:space-x-6 sm:px-6">
      <p className="text-semibold space-x-4 text-stone-300">
        <span>{totalCartQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
