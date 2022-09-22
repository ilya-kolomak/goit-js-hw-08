import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new VimeoPlayer(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('LOCALSTORAGE_KEY', seconds);
}

player.setCurrentTime(localStorage.getItem('LOCALSTORAGE_KEY'));
