import noImage from './default.png';

const requestImage = require.context('../../assets', false, /.jpg$/);

export const loadImage = imageName => {
  try {
    return requestImage(`./${imageName}.jpg`).default;
  } catch (error) {
    return noImage;
  }
};
