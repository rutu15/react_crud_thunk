import axios from "axios";

function API(method, endPoint, payload, uri) {
    const url = uri ? `${process.env.REACT_APP_API_BASEURL}${endPoint}/${uri}` : `${process.env.REACT_APP_API_BASEURL}${endPoint}`
    return axios({
        method: method,
        url: url,
        headers: {'content-type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        data: payload,
    })
        .then(function (response) {
            return response;
        })
        .catch((error) => {
            throw error.response;
        });
}

export default API