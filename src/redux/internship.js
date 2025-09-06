import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const internshipApi = createApi({
  reducerPath: 'internshipApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://delightful-broccoli-938a03b463.strapiapp.com/api/' }),
  endpoints: (builder) => ({
    getInternships: builder.query({
    query: (filters) => {
      let queryStr = 'internships?populate=*';
      if (filters && filters !== 'All') {
        queryStr += `&filters[field][$eq]=${encodeURIComponent(filters)}`;
      }
      return queryStr;
    }
  }),

  }),
});

export const { useGetInternshipsQuery } = internshipApi;
