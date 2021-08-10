let i=2;
function isPrime(n){
  if(n%i==0){
      return false;
  }
  else{
      return true;
  }
}
const result= isPrime(10);
console.log(result);