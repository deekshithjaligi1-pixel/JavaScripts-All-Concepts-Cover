// ES6 Modules = An external file that contains resuable code 
//               that can be imported into other JavaScript files
//               can contain varibles , classes , functions ... and more
//                Introduced as part of ECMAScript 2015 update


export const PI = 3.14159;

export function getCircumference(radius){
    return 2*PI*radius;
}

export function getArea(radius){
    return 2*PI*radius*radius;
}

export function getVolume(radius){
    return 4*PI*radius*radius*radius;
}

