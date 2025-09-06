import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appliedTrainings: []
};

const applyHistorySlice = createSlice({
  name: "applyHistory",
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      const training = action.payload;
      state.appliedTrainings.push({
        ...training,
        appliedAt: new Date().toISOString(),
      });
    },
  },
});

export const { addToHistory } = applyHistorySlice.actions;
export default applyHistorySlice.reducer;
