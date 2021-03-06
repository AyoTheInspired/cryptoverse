import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
	"x-rapidapi-host": "coinranking1.p.rapidapi.com",
	"x-rapidapi-key": "e1dd4f0602msh7906cf9baee7fbcp1c1427jsn50e16f1bcace",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({
	url,
	headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
		getCryptoDetails: builder.query({
			query: (coinId) => createRequest(`/coin/${coinId}`),
		}),
	}),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;
