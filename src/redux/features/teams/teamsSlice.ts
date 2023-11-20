import { createSlice } from "@reduxjs/toolkit";

export interface ITeam {
  _id: string;
  teamName: string;
  teamCategory: string;
  createdAt: string;
  updatedAt: string;
};

const initialState: ITeam = {
  _id: "",
  teamName: "",
  teamCategory: "",
  createdAt: "",
  updatedAt: "",
};

const teamsSlice = createSlice({
  initialState: initialState,
  name: "teamsSlice",
  reducers: {},
});

export default teamsSlice.reducer;