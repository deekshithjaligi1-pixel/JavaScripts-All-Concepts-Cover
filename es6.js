import {PI,getCircumference,getArea,getVolume} from './MathUtil.js';

console.log(PI);
const cirucumference = getCircumference(10);
const Area = getArea(12);
const Volume = getVolume(3);

console.log(`${cirucumference.toFixed(2)}cm^2`);
console.log(`${Area.toFixed(2)}cm^2`);
console.log(`${Volume.toFixed(2)}cm^3`);