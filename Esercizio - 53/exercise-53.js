function sum(...arg) {  
    //let total = 0;
    //total = arg.forEach(element => total += element );
    // return total;
    
    const initialValue = 0;
    const sumWithInitial = arg.reduce((preElement, currElement) => preElement + currElement, initialValue);
    return sumWithInitial;
}

console.log(sum(1, 2, 3, 4, 5));