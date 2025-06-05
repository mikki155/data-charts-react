import useSWR from "swr";
import { fetcher } from "../utils/constants";

export function fetchSomeData(url: string) {
    return useSWR(url, fetcher);
}