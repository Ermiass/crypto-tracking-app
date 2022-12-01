import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders =  {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '38e5b09e8fmsh4f73ab3e089793bp1b7ce2jsn472837ebcdf5',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}


const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;