// const givenInches =288;
// const toFit = givenInches / 12;
// console.log('toFit', toFit);

function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log('dadar feet:',dadaFeet);


const naniInch = 188;
const  naniFeet=inchToFeet(naniInch);
console.log('Nani feet:',naniFeet);
