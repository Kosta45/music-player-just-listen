import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
//         'X-RapidAPI-Key': '9d6a281f97mshbb882296f0b6faep1c6757jsn2be96f2e00eb',
//     }
// };

// fetch('https://shazam.p.rapidapi.com/charts/track', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com/charts',
        prepareHeaders: (headers) => {
            headers.set('X-RapidApi-Key', '9d6a281f97mshbb882296f0b6faep1c6757jsn2be96f2e00eb')

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/track' }),
    })
});


export const {
    useGetTopChartsQuery,
} = shazamCoreApi