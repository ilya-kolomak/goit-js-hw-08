import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';
import localStorage from './storage';

const iframeRef = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframeRef);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

function onPlay(data) {
  localStorage.save(LOCALSTORAGE_KEY, Math.floor(data.seconds));
}

player.on('timeupdate', throttle(onPlay, 1000));

let loadedTime = localStorage.load(LOCALSTORAGE_KEY);
if (loadedTime) {
  player.setCurrentTime(loadedTime);
}
