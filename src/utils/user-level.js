import {UserLevel} from '../const';

const defineUserLevel = (watchedFilms) => {
  const n = watchedFilms;
  let userLevel = '';

  // switch (watchedFilms) {
  //   case 0:
  //   // case 1-10:
  //   // case 11-20:
  //   // case 21:
  //   default:
  //     throw new Error('Incorrect value of watched films');
  // }

  if (n === 0) {
    userLevel = UserLevel.NONE;
  }
  else if (n >= 1 && n <= 10) {
    userLevel = UserLevel.NOVICE;
  }
  else if (n >= 11 && n <= 20) {
    userLevel = UserLevel.FAN;
  }
  else if (n >= 21) {
    userLevel = UserLevel['MOVIE BUFF'];
  }

  return userLevel;
};

export {defineUserLevel};
