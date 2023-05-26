import { createSlice } from "@reduxjs/toolkit";

const initialState = { page: 0, mediaURL: "", data: [] };

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setMediaURL: (state, action) => {
      state.mediaURL = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setPage, setMediaURL, setData } = videoSlice.actions;
export default videoSlice.reducer;
