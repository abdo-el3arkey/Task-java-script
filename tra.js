///////////////////////////(Day 1)///////////////////////////////////////////////////
var sum=0;
var input;
do{
    var input = prompt("Enter a Number");
    if(!isNaN(input)){
    sum += Number(input);
    }
} while(input !=="0" && sum <=100);
document.write(sum)

// -----------------------------------------------------------------
alert('Welcome to my site');
var Name = prompt("Enter your name");
var Color = prompt("Enter your color: red, green, blue");
document.write(`<h style="color:${Color}">Welcome ${Name}</h>`);

//------------------------------------------------------------------
var input = prompt("Enter a message");
for(var i=0; i<=6; i++) {
    document.write(`<h${i} style="color:red"> ${input}</h${i}>`);
}
////////////////////////(Day 2)//////////////////////////////////////////////////////////////////
var myName = prompt("Enter your name");
var count = 0;
for(var i = 0; i<myName.length; i++){
    if(myName[i] == "e"){
        count++;
    }
    console.log(count);
}
//------------------------------------------------------------------
var re = /^[a-zA-Z0-9]+$/;
do {
  var myName = prompt("Enter your name");
  var phone = prompt("Enter your phone number with length 8");
  var mobile = prompt("Enter your mobile number with length 11");
  var email = prompt("Enter your email");
} while (!re.test(myName) || phone.length !== 8 || mobile.length !== 11 || !mobile.startsWith("01") || isNaN(Number(mobile)) ||!email.includes("@")
);
//-----------------------------------------------------------------------
var message = prompt("Please enter a message");
var x=message.split('').reverse('').join('');
var senstive = prompt("is message case sensitive ");
if(senstive=="yes"){
 if(x==message){
    console.log("palidrome");
 }else 
 console.log(" not palidrome");
 }
 else{
    if(x.toLowerCase()==message.toLowerCase())
    console.log("palidrome");
else
console.log(" not palidrome");
 }
//////////////////////////////////(Math obj)////////////////////////////////////////////////////////
var r;
do{ 
r = prompt("Enter the radius :");
} while (isNaN(r));
var Area = Math.PI * Math.pow(r,2);
alert("The Area is: " + Area);
//------------------------------------------------
var x;
do{
  x=prompt("Enter the value :");
}while (isNaN(x));
var squareRoot=Math.sqrt(x);
alert("The squreRoot is:" +squareRoot);
////////////////////////////////(array)/////////////////////////////////////////////////////////////////
var arr=[4,8,1];
var sum = arr[0]+arr[1]+arr[2];
var multi = arr[0]*arr[1]*arr[2];
var div = arr[0]/arr[1]/arr[2];
console.log("sum:" +sum);
console.log("multiplaction:" +multi);
console.log("Division:" +div);
 ///////////////////////////////////(sorting)/////////////////////////////////////////////////////////////////
var arr=[5,7,1,9,4];
 var desarr=arr.sort((a,b) => b - a); 
 console.log("values after descending:" + desarr);
var asarr=arr.sort((a,b) => a - b); 
console.log("values after ascending:" + asarr);
/////////////////////////////////////(Function)//////////////////////////////////////////////////////////////////
function myFunc(x,y){
  if(arguments.length !==2){
    throw("two parameters only");
  }
}
//--------------------------------------------------------
function addNumbers(values){
  for(var i=0;i<values.length;i++){
    if (typeof arguments[i] === 'number') {
      sum += arguments[i];
  } else {
      throw ('All arguments must be a numbers');
  }
}
return sum;
}
//------------------------------------------------------  
function reverseParams(...numbers) {
  var paramArray = Array.from(numbers);
  paramArray.reverse();
  return paramArray;
}
var result=reverseParams(1,2,3,4,5);
