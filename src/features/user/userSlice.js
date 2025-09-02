import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../services/apiGeocoding";
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  const position = await getPosition();

  const address = await getAddress(
    position.coords.latitude,
    position.coords.longitude,
  );

  const addressString = `${address?.city}, ${address?.street}`;
  return { position, address: addressString };
});
const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "idle";
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});
export const { updateName } = userSlice.actions;
export default userSlice.reducer;

export const getUsername = (state) => state.user.username;
