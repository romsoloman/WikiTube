'use strict';

(function () {
    getVideosData('beatels').then(videos => {
        renderVideo(videos);
        renderTop5Videos(videos)
    })
    getWikiData('beatels').then(item => {
        renderWikiVideo(item)
    })
})()

function renderVideo(videos) {
    document.querySelector('iframe').src = `https://www.youtube.com/embed/${videos[0].id.videoId}`
}

function renderTop5Videos(videos) {
    document.querySelector('.videos-list').innerHTML = videos.map(video => {
        return `<div class="video-item">
                  <img src="${video.snippet.thumbnails.default.url}" class="video-image">
                  <h4 class="title">${video.snippet.title}</h4>
               </div>`
    }).join('');
}

function renderWikiVideo(wiki) {

    document.querySelector('.band-name').innerText = wiki.query.search[0].title;
    document.querySelector('.band-secondly').innerHTML = wiki.query.search[0].snippet;
    document.querySelector('.band-desc').innerHTML = wiki.query.search[0].snippet;

}

function onSearchVideo(value, ev) {
    if (ev.keyCode === 13) {
        getVideosData(value).then(videos => {
            renderVideo(videos);
            renderTop5Videos(videos)
        })
        getWikiData(value).then(item => {
            renderWikiVideo(item)
        })
        ev.target.value = '';
    }
}