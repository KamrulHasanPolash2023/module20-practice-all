function givenNumber(number){
    const reminder = number % 2;
    if(reminder === 0){
        return true;
    }
    else{
        return false;
    }
}
const myNumber = givenNumber(300);
console.log(myNumber);