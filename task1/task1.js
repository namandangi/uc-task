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
        var number = input.split(",");
        break;
    }
}while(1);

console.log("Numbers in Decimal format");
number.forEach((element)=>{
console.log(parseInt(element,2));
});

console.log("Numbers divisible by 5");
number.forEach(function(element,intVal){
    intVal = parseInt(element,2);
    if(intVal%5==0)
    console.log(intVal);
});