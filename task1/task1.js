var count = 0;
console.log("connected");
alert("Check out the Task 1!");

var num1 = number;
do
{
    var input = (prompt("Enter a binary number"));
    if(input.includes('2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'))
    {
        alert("Please check your input");
    }
    else 
    {   
        var number = input.split(","); //this function splits a string when it finds a ',' and stores it in a string array
        break;
    }
}while(1);

console.log("Numbers in Decimal format");
number.forEach((element)=>{
console.log(" Binary : "+element+" || Decimal : "+parseInt(element,2));
});

console.log("Numbers divisible by 5");
number.forEach(function(element,intVal){
    intVal = parseInt(element,2);   //returns decimal value of input string number by specifying its base as an argument parameter
    if(intVal%5==0)
    console.log(" Binary : "+element+" || Decimal : "+intVal);
});