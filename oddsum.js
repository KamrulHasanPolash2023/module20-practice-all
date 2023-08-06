    // // Code for sum of all ElementInternants
    // // ---------------------------------------

    // function getSumOfAnArray(numbers){
    //     let sum =0;
    //     for(let i = 0; i < numbers.length; i++){
    //         const index = i;
    //         const element = numbers[index];
    //         sum = sum + element;
    //         console.log(index, element, sum);
    //     }
    //     return sum;

    // }


    // const myNumbers =[20, 15, 17, 82, 65, 89, 47, 51, 52, 54, 53, 64];
    // getSumOfAnArray(myNumbers);




// Code for sum of odd ElementInternants
// ---------------------------------------

function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 === 1){  
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;

}

const myNumbers =[20, 15, 17, 82, 65, 89, 47, 51, 52, 54, 53, 64];
const oddNumbers=getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);

console.log('Odd Number Sum', oddNumberSum);
