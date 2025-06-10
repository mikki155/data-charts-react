import useSWR from "swr";
import { fetcher, fetchWithToken } from "../utils/constants";

export function fetchData(url: string) {
    return useSWR(url, fetcher);
}

export function fetchDataWithToken(url: string, token: string) {
    return useSWR([url, token], ([url, token]) => fetchWithToken(url, token));
}