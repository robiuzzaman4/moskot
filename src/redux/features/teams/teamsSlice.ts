import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITeam {
  teamName: string;
  teamCategory: string;
}

interface TeamsState {
  teams: ITeam[];
}

const initialState: TeamsState = {
  teams: [],
};

const teamsSlice = createSlice({
  initialState: initialState,
  name: "teamsSlice",
  reducers: {
    createNewTeam: (state, action: PayloadAction<ITeam>) => {
      state.teams.push(action.payload);
    },
  },
});

export const { createNewTeam } = teamsSlice.actions;
export default teamsSlice.reducer;
