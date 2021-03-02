// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    return 'Минимум должен быть меньше максимума';
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
}

getRandomIntInclusive(0, 10);

// Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length

const limitText = (text, MAX_LENGTH) => {
  const textLength  = text;
  if (textLength.length <= MAX_LENGTH) {
    return true;
  } else {
    return false;
  }
}

limitText('text', 140);
