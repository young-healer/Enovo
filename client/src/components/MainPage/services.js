// import ('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

export function getAllStatusRequest() {

  return fetch('http://localhost:3000/status')
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
}

export function getStatusByDateRequest(date) {

  return fetch(`http://localhost:3000/status/${date}`)
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
}