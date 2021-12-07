console.log('Hola mundo typescript');

// Explicito
//Number

//Declara variable
let phone: number;
//Asignar valor
phone = 3003344567;

//Declara y signar 
let nit: number = 1234567890;


console.log(`phone ${phone} - nit ${nit}`);

//Numericos especiales a partir de la espcificacion is6 o emascript2015
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String
let names: string = 'Evergara';
let email: string;
email='micorreo@com.co'

console.log(`name ${names} - email ${email}`);

//Boolean
let isActive: boolean = true;
let isNew: boolean = false;
console.log(`Esta activo ${isActive} - es nuevo ${isNew}`);
//Inferido

let number_movil = 1229939333;
let person ='mi hermano';
let isMyBrother = true;
console.log(`Este número de teléfono ${number_movil}, parece  ${person} sera el ${isMyBrother}` );


//Template string
// Uso de back-tick

let userInfo: string;
let username: string = 'Evergara';
let firtname: string = 'Vergara';
let phone2: number = 32134567;
let isPro: boolean = true;


userInfo = `
  user info:
  username: ${username}
  firtname: ${firtname}
  phone: ${phone2}
  isPro: ${isPro}
`;

console.log('userInfo' + userInfo);