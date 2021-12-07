//Void
//Tipo explicito

function showInfo(user: any): void{
    console.log('User Info',user.id, user.name, user.firstName);
    if (1 === 1) {
        return;
    }
    console.log('hello');
    return;
}

showInfo({id:11, name:'evergara', firstName:'vergara'});

//Tipo inferido

function showFormatteInfo(user: any){
    console.log('User Info', `
    user info:
    ID: ${user.id}
    NAME: ${user.name}
    FIRSTNAME: ${user.firstName}
  `);
}

showFormatteInfo({id:11, name:'evergara', firstName:'vergara'});


//Tipo Void como tipod de datos en variable es solo si quitamos el modo stricto y asi podemos ver que es un subconjunto de void
/**
let unUsable = null;
let unUsable = undefined;
*/
