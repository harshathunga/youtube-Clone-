// import axios from 'axios';

// // const axios = require("axios");

// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
 
//   params: {
//     maxResults: '50',
//   },
//   headers: {
//     'X-RapidAPI-Key': '4d16749696msh51e126324a40fedp150564jsn4fbb3897bd49',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// export const fetchapi = async(url) => {
//     const {data} = await axios.get(`${BASE_URL}/${url}`, options);
//     return data;
// }

// const fetch = require('node-fetch');

const url = 'https://youtube-v31.p.rapidapi.com/search?q=music&part=snippet%2Cid&regionCode=US&maxResults=50&order=date';

export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4d16749696msh51e126324a40fedp150564jsn4fbb3897bd49',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	// .then(json => console.log(json))
	// .catch(err => console.error('error:' + err));

