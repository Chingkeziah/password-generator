function passGen(){
    // at least 8 charaters
    // at least a capital letter
    // a symbol
    // a number
    let finalPassword = '';
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const seed = '?@$-,.+%'
    for (let i = 0; i<8; i++){
        // math.random returns a value between 0 and 1 which would result in decimal numbers
        let randomNumber = Math.round(Math.random() * 26);
        finalPassword = finalPassword + alphabets
        [randomNumber]
    }
   return finalPassword
} 
const x = passGen()
console.log(x)