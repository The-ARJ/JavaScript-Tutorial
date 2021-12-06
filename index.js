// 1.Ways to print in java script

//  console.log("Hello World");
//  alert("Alert Me")
// document.write("Thus is Document Write")
//--------------------------------------------------
// 2.Java Script Console API

// console.log("Hello World", 4 + 6, "Another Log");
// console.warn("This is warning");
// console.error("This is Error");

// --------------------------------------------------

// 3. JavaScript Variables

// What are variables? Containers are to store data valules
var number1 = 34;
var number2 = 56;
console.log(number1+number2)

// 4. Data Types in Data Types
//integer
var num1=21331;
var num2 = 34234;
//string
var str1 = "This is String";
var str2 = "This is second String";

//object
var marks = {
    ravi:34,
    shubham:78,
    harry:977.324
}

//Booleans
var a= true;
var b = false;
console.log("a is ", a,"and b is",b);

//undefined properties
var und = undefined;
var undefine;
console.log(und);
console.log(undefined)
console.log(undefine)

//null properties
var n = null;
console.log(n)
console.log(null)


/*Types of datatypes in JS
1.primitive data type
  -underfined, nullm number, string, boolean,symbol

2.refrence data types
  --Arrays
*/

//Arrays Properties
var arr =[1,2,"Aayush",4,5,8]
console.log(arr)
console.log(arr[2])
console.log(arr[2])
console.log(arr[4])


for(let i = 0; i<arr.length;i++){
console.log(arr[i])
}
console.log(arr.length)



// Operators in JS
var a = 66;
var b = 33;

//Arithematic Operators
console.log("The value of a + b is ", a+b);
console.log("The value of a + b is ", a-b);
console.log("The value of a + b is ", a*b);
console.log("The value of a + b is ", a/b);


//Assignment Operators
var c = b;
console.log(c)
c +=20;
console.log(c) //value of b is assigned to c


//Comparision Operators
var x = 34;
var y = 35;
console.log(x==y);//Equals to
console.log(x>y);//Greater than
console.log(x>=y);//greater or equal to
console.log(x<y);//smaller than
console.log(x<=y);//small equal to

//Logical Operators
//Logical And (&&)  
console.log(true && true)
 console.log(true&&false)
 console.log(false&&false)
 console.log(false&&true)


// Logical or(||)
 console.log(true|| true)
 console.log(true||false)
 console.log(false||false)
 console.log(false||true)

//bitwise operator - not important

// Logical Not(!)
console.log(!true)
console.log(!false)


