import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// make Key for our value in localStorage
const CUR_TIME = 'videoplayer-current-time';

// Initial library vimeo
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = ({ seconds }) => {
  // Save current time when whatching video
  localStorage.setItem(CUR_TIME, seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

// Run video from current time
if (localStorage[CUR_TIME]) {
  player.setCurrentTime(localStorage.getItem(CUR_TIME));
}
