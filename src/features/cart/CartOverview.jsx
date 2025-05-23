import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="text-w flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:space-x-6 sm:px-6 md:text-basemy-10">
      <p className="text-semibold space-x-4 text-stone-300">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
