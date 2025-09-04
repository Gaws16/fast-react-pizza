import { formatCurrency } from "../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="border-b-2 py-3">
      <div className="flex justify-between font-semibold">
        <p>
          <span>{quantity} &times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      {isLoadingIngredients ? (
        <span className="ml-2 text-sm italic text-stone-400">
          Loading ingredients...
        </span>
      ) : (
        <span className="ml-2 text-sm italic text-stone-400">
          ({ingredients.join(", ")})
        </span>
      )}
    </li>
  );
}

export default OrderItem;
