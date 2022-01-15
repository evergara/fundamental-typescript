let user: object;
user = {}; // Object
user = {
	id: 1,
	username: "paparezzi",
	firstName: "Pablo",
	isPro: true
}

//console.log('user.username', user.username) //Da error porque el tipo de dato object no permite acceder a las propiedades

console.log('user', user);

//Object vs object(clase de JS Vs el tipo de TS)
const  myObject = {
	id: 1,
	username: "paparezzi",
	firstName: "Pablo",
	isPro: true
};

let isInstance = myObject instanceof Object;
console.log('isInstance myObject', isInstance);

isInstance = user instanceof Object;
console.log('isInstance user', isInstance);
console.log('user.username', myObject.username) 


