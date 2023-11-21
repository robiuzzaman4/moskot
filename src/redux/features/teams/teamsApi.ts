import { baseApi } from "../api/baseApi";

export const teamsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTeams: build.query({
      query: () => "/team",
      providesTags: ["Teams"],
    }),
    createNewTeam: build.mutation({
      query: (team) => ({
        url: "/team/create",
        method: "POST",
        body: team,
      }),
      invalidatesTags: ["Teams"],
    }),
  }),
});

export const { useGetTeamsQuery, useCreateNewTeamMutation } = teamsApi;
