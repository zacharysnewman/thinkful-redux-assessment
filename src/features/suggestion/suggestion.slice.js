import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSuggestion = createAsyncThunk(
  /* √ Task 15: Complete the `createAsyncThunk()` function to load a suggestion from this URL: http://localhost:3004/api/suggestion */
  "suggestion/fetchSuggestion",
  async () => {
    try {
      const response = await fetch("http://localhost:3004/api/suggestion");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  suggestion: "",
  loading: false,
  error: true,
};

const options = {
  name: "suggestion",
  initialState,
  reducers: {},
  extraReducers: {
    /* √ Task 16: Inside `extraReducers`, add reducers to handle all three promise lifecycle states - pending, fulfilled, and rejected - for the `fetchSuggestion()` call */
    [fetchSuggestion.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchSuggestion.fulfilled]: (state, action) => {
      state.loading = false;
      state.suggestion = action.payload.data;
    },
    [fetchSuggestion.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
};

const suggestionSlice = createSlice(options);

export default suggestionSlice.reducer;

// √ Task 17: Create a selector, called `selectSuggestion`, for the `suggestion` state variable and export it from the file
export const selectSuggestion = (state) => state.suggestion;
export const selectLoading = (state) => state.suggestion.loading;
export const selectError = (state) => state.suggestion.error;
