import { filterInputs, POTRACE } from './ui.js';

const monochromeSVGWorker = new Worker('monochromeworker.js', {
  type: 'module',
});

const convertToMonochromeSVG = async (imageData) => {
  return new Promise(async (resolve) => {
    monochromeSVGWorker.onmessage = (e) => {
      resolve(e.data);
    };
    const config = {
      turdsize: parseInt(filterInputs[POTRACE.turdsize].value, 10),
    };
    monochromeSVGWorker.postMessage([imageData, config]);
  });
};

export { convertToMonochromeSVG };