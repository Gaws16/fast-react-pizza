import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
<<<<<<< HEAD
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});
export default store;
=======
const store = configureStore({
    reducer:{
        user: userReducer,
    }
});
export default store;
>>>>>>> 5f458fb32ad4aa7656260e17dc4726dffbfd9e33
