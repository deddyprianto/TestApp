import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com//posts",
  }),
  endpoints: (builder) => ({
    getDatataByName: builder.query({
      query: (name) => `data/${name}`,
    }),
  }),
});
export const { useGetDatataByNameQuery } = dataApi;
