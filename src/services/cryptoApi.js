import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
	"x-rapidapi-host": "coinranking1.p.rapidapi.com",
	"x-rapidapi-key": "e1dd4f0602msh7906cf9baee7fbcp1c1427jsn50e16f1bcace",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/exchanges";

const createRequest = (url) => ({
	url,
	headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: () => createRequest("/exchanges"),
		}),
	}),
});

// var options = {
// 	method: "GET",
// 	url: "https://coinranking1.p.rapidapi.com/exchanges",
// 	headers: {
// 		"x-rapidapi-host": "coinranking1.p.rapidapi.com",
// 		"x-rapidapi-key": "e1dd4f0602msh7906cf9baee7fbcp1c1427jsn50e16f1bcace",
// 	},
// };
