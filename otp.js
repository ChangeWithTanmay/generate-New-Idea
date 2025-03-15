let otp='';
const number = '0123456789';
for(let i=0; i<6; i++){
    const index = Math.random()* number.length;
    otp=otp+number.charAt(index);
}
console.log(otp);