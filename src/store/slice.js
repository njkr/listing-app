import { createSlice } from "@reduxjs/toolkit";
import ListingController from "../controllers/ListingController";

const initialState = {
  data: [],
  filter: { sort: 0, search: "" },
};

export const getAllUniversityData = () => async (dispatch, getState) => {
  try {
    let data = await ListingController.getUniversities();
    dispatch(setData(data));
  } catch (error) {
    alert(error);
  }
};

export const deleteById = (id) => async (dispatch, getState) => {
  try {
    const {
      app: { data },
    } = getState();
    let removedDeleted = [...data].filter((v) => v.id !== id);
    dispatch(setData(removedDeleted));
  } catch (error) {
    alert(error);
  }
};

export const appSlice = createSlice({
  name: "appdata",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = appSlice.actions;

export default appSlice.reducer;
