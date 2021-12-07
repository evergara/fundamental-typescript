// Never
// explicito


function handleError(code: number, message: string): never{
    //prceso your code here
    //Genrate a message
    throw new Error(`message: ${message}. Code: ${code}`);
}

try {
    handleError(404, 'Not found');
} catch (error) {
    
}

