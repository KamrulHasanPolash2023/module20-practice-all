function isEven(number){
    const even= number % 2;
    if( even === 0){
        return true
    }
    else{
        return false
    }
}

const myyear =isEven(1993);
console.log('1993 :',myyear);

const sarayear =isEven(2020);
console.log('1993 :',sarayear);

