import request from 'superagent'

const API_KEY = '9314d51f7275f12294c1ece77bde5ed6'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    const apiRequest = request.get(url)
    console.log('request:', apiRequest)

    return {
        type: FETCH_WEATHER,
        payload: apiRequest
    }
}