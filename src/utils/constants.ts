export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const fetchWithToken = (url: string, token: string) => fetch(url, {
    headers: {
        'apikey': token
    }
}).then((res) => res.json());