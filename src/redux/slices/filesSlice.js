import { createSlice } from "@reduxjs/toolkit";

export const filesSlice = createSlice({
  name: "files",
  initialState: {
    file: "",
    files: [],
    dataFiles: [],
    error: [],
    serverStatus: "ACTIVE",
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
    setServerStatus: (state, action) => {
      state.isLoading = false;
      state.serverStatus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startLoading,
  setFiles,
  setDataFiles,
  setFile,
  setServerStatus,
} = filesSlice.actions;
