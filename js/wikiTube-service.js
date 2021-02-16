'use strict';

var gSavedData;

function getVideosData(val) {
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyCZBS00UH_214ubJkmSxgdHT6WEpTHK2J0&q=${val}`)
        .then(res => {
            return res.data.items;
        })
        .catch(err => {
            console.log('Service got Error:', err);
        })
}

function getWikiData(val) {
    return axios.get(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=search&srsearch=${val}&format=json`)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log('Service got Error:', err);
        })
}