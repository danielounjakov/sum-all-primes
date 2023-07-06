function sumPrimes(num) {
  const primeContainer = []
  
  let pass_status

  function primeChecker(number){
    let isPrimeStatus = true 
    for(let i = 2; i<number;i++){
      if(number%i ==0){
        isPrimeStatus = false;
        break;
      }
      else{
        isPrimeStatus = true;
      }

    }
    return isPrimeStatus
  }
   
for(let i=2 ; i<=num;i++){
  pass_status = primeChecker(i) 
  if(pass_status==true){
    primeContainer.push(i)
  }
  else{
    // do nothing
  }
}

console.log(primeContainer)

 

const reduced_primeContainer =  primeContainer.reduce((sum,i) => sum + i)

console.log(reduced_primeContainer)

return reduced_primeContainer
}

sumPrimes(3);


//((sum,i) => sum + i.rating,0)

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31