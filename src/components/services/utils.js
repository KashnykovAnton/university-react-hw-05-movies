const NO_POSTER_URL =
  'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_960_720.png';
const NO_PHOTO_URL =
  'https://t4.ftcdn.net/jpg/01/86/29/31/240_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg';
const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const checkPath = (path, string) => {
  switch (string) {
    case 'poster':
      return !path ? NO_POSTER_URL : `${BASE_URL}${path}`;
    case 'photo':
      return !path ? NO_PHOTO_URL : `${BASE_URL}${path}`;
    default:
      return;
  }
};
