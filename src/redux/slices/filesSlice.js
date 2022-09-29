import { createSlice } from "@reduxjs/toolkit";

export const filesSlice = createSlice({
  name: "files",
  initialState: {
    file: "",
    files: [],
    dataFiles: [],
    error: [],
    isLoading: false,
  },
  reducers: {
    startLoading: (state /* action */) => {
      state.isLoading = true;
    },
    setFile: (state, action) => {
      state.file = action.payload;
    },
    setFiles: (state, action) => {
      state.files = action.payload.files;
    },
    setDataFiles: (state, action) => {
      state.isLoading = false;
      state.dataFiles = action.payload.files;
      state.error = action.payload?.filesError || [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { startLoading, setFiles, setDataFiles, setFile } =
  filesSlice.actions;
