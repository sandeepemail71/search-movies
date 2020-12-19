const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '81f382d33088c6d52099a62eab51d967';
// '/3/movie/upcoming?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=1'



export const callApi = (
    endpoint,
    method = 'GET',
    body,
) => {
    let fullUrl = BASE_URL + endpoint;
    if (fullUrl.includes('?')) {
        fullUrl += `&api_key=${API_KEY}`;
    } else {
        fullUrl += `?api_key=${API_KEY}`;
    }

    return fetch(fullUrl, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body
    }).then(response =>
        response.json().then(json => {
            if (!response.ok)
                return Promise.reject({ ...json, status: response.status });
            return json;
        })
    );
}