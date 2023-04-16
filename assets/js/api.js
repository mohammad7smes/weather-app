

'use strict';

const api_key = '1b906fdf1c55907521415ff8cc2be83d';

/**
 * Fetch data from server
 * @param {*} URL 
 * @param {*} callback 
 */

export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.join())
        .then(data => callback(data))
}