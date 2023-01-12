import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders =  {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '38e5b09e8fmsh4f73ab3e089793bp1b7ce2jsn472837ebcdf5',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}


const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'cryptoNewsApi',
  // All of our requests will have URLs starting
  baseQuery: fetchBaseQuery({ baseUrl }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `get` endpoint is a "query" operation that returns data
    getCryptoNews: builder.query({
      // The URL for the request is
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;