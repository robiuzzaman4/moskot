// "use client"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://little-programmers-frontend-api-abdurrahmantalha.vercel.app/api/v1",
  }),
  tagTypes: ["Teams"],
  endpoints: () => ({}),
});
