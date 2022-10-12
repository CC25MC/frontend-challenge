import request from "../../api";
import {
  startLoading,
  setDataFiles,
  setFiles,
  setServerStatus,
} from "./filesSlice";

export const getFiles = () => {
  return async (dispatch) => {
    dispatch(startLoading());

    const data = await request.files.getFiles();

    if (data.message === "Network Error") {
      dispatch(setServerStatus("INACTIVE"));
    } else {
      dispatch(setDataFiles(data));
    }
  };
};

export const getListFiles = () => {
  return async (dispatch) => {
    dispatch(startLoading());

    const data = await request.files.getListFiles();

    dispatch(setFiles(data));
  };
};

export const getFile = (filename) => {
  return async (dispatch) => {
    dispatch(startLoading());
    if (filename !== "All") {
      const data = await request.files.getFile(filename);
      dispatch(setDataFiles(data));
    } else {
      const data = await request.files.getFiles();

      if (data.message === "Network Error") {
        dispatch(setServerStatus("INACTIVE"));
      } else {
        dispatch(setDataFiles(data));
      }
    }
  };
};
