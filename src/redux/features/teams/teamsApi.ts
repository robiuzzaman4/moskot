import { baseApi } from "../api/baseApi";

export const teamsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTeams: build.query({
      query: () => "/team",
      providesTags: ["Teams"]
    }),
  }),
});

export const { useGetTeamsQuery } = teamsApi;
