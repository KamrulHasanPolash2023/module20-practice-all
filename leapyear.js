function isLeapYear(year){
    const reminder = year % 4;
    if( reminder === 0){
        return true;
    }
    else{
        return false;
    }
}

const theyear=isLeapYear(2016);
console.log(theyear);

const thisyear=isLeapYear(2023);
console.log(thisyear);