import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  list: [],
  value: "",
  error: {
    stackErrors: null,
    message: "",
  },
};

const getUserList = createSlice({
  name: "getUserList",
  initialState,
  reducers: {
    start: {
      reducer(state) {
        state.loading = true;
        state.error = initialState.error;
      },
      prepare(payload) {
        return { payload };
      },
    },
    end(state, action) {
      state.loading = false;
      state.list = action.payload.list;
      state.value = action.payload.value;
      state.total = action.payload.total;
      state.error = initialState.error;
      
    },
    error(state, action) {
      state.error.message = action.payload.message;
      state.error.stackErrors = action.payload.stackErrors;
      state.loading = false;
      state.total = initialState.total;
      state.list = initialState.list;
    },
    clear() {
      return initialState;
    },
  },
});

export const getUserListActions = getUserList.actions;
export default getUserList.reducer;
