import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../services/apiRestaurant";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { fetchAddress, getUsername } from "../user/userSlice";
import store from "../../store";
import { formatCurrency } from "../utils/helpers";
import { useState } from "react";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const navigate = useNavigation();
  const isSubmitiong = navigate.state === "submitting";
  const formError = useActionData();
  const { username, address, status, position, error } = useSelector(
    (state) => state.user,
  );
  const dispatch = useDispatch();

  const cartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = cartPrice * 0.2;

  const totalPrice = withPriority ? cartPrice + priorityPrice : cartPrice;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <div className="grow">
            <input
              type="text"
              name="customer"
              defaultValue={username}
              required
              className="input"
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input" />
          </div>
          {formError?.phone && (
            <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700 sm:text-sm">
              {formError.phone}
            </p>
          )}
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="flex grow gap-3">
            <input
              type="text"
              name="address"
              defaultValue={address}
              required
              className="input"
            />

            {!address && (
              <Button
                type="small"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get Possition
              </Button>
            )}
            {error && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700 sm:text-sm">
                Something went wrong! Please make sure to allow location access.
              </p>
            )}
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-opacity-50 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div className="text-sm font-semibold">
          <Button type="primary" disabled={isSubmitiong}>
            {isSubmitiong
              ? "Placing order..."
              : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = "Invalid phone number";
  }
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
