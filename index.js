// // // 1.Ways to print in java script

// // //  alert("Alert Me")
// // // document.write("Thus is Document Write")
// // //--------------------------------------------------
// // // 2.Java Script Console API

// // // console.log("Hello World", 4 + 6, "Another Log");
// // // console.warn("This is warning");
// // // console.error("This is Error");

// // // --------------------------------------------------

// // // 3. JavaScript Variables

// // // What are variables? Containers are to store data valules
// // var number1 = 34;
// // var number2 = 56;
// // console.log(number1+number2)

// // // 4. Data Types in Data Types
// // //integer
// // var num1=21331;
// // var num2 = 34234;
// // //string
// // var str1 = "This is String";
// // var str2 = "This is second String";

// // //object
// // var marks = {
// //     ravi:34,
// //     shubham:78,
// //     harry:977.324
// // }

// // //Booleans
// // var a= true;
// // var b = false;
// // console.log("a is ", a,"and b is",b);

// // //undefined properties
// // var und = undefined;
// // var undefine;
// // console.log(und);
// // console.log(undefined)
// // console.log(undefine)

// // //null properties
// // var n = null;
// // console.log(n)
// // console.log(null)


// // /*Types of datatypes in JS
// // 1.primitive data type
// // -underfined, nullm number, string, boolean,symbol

// // 2.refrence data types
// // --Arrays
// // */

// // //Arrays Properties
// // var arr =[1,2,"Aayush",4,5,8]
// // console.log(arr)
// // console.log(arr[2])
// // console.log(arr[2])
// // console.log(arr[4])


// // for(let i = 0; i<arr.length;i++){
// //     console.log(arr[i])
// // }
// // console.log(arr.length)



// // // Operators in JS
// // var a = 66;
// // var b = 33;

// // //Arithematic Operators
// // console.log("The value of a + b is ", a+b);
// // console.log("The value of a + b is ", a-b);
// // console.log("The value of a + b is ", a*b);
// // console.log("The value of a + b is ", a/b);


// // //Assignment Operators
// // var c = b;
// // console.log(c)
// // c +=20;
// // console.log(c) //value of b is assigned to c


// // //Comparision Operators
// // var x = 33;
// // var y = 35;
// // console.log(x==y);//Equals to
// // console.log(x>y);//Greater than
// // console.log(x>=y);//greater or equal to
// // console.log(x<y);//smaller than
// // console.log(x<=y);//small equal to

// // //Logical Operators
// // //Logical And (&&)  
// // console.log(true && true)
// // console.log(true&&false)
// // console.log(false&&false)
// // console.log(false&&true)


// // // Logical or(||)
// // console.log(true|| true)
// // console.log(true||false)
// // console.log(false||false)
// // console.log(false||true)

// // //bitwise operator - not important

// // // Logical Not(!)
// // console.log(!true)
// // console.log(!false)

// // //------------------------------------------------------------------------------------
// // //  console.log("Hello World");

// // // FUNCTION in JAVA SCRIPT
// // function avg(a,b){
// //     return (a+b)/2;
// // }
// // //DRY = DO NOT REPEAT YOURSELF
// // c1=avg(4,6);
// // c2=avg(14,16)
// // console.log(c1,c2)

// // // CONDITIONALS IN JAVA SCRIPT
// // //if else
// // var age =32
// // if(age>8){
// //     console.log("You are Adult");
// // }
// // else{
// //     console.log("You are kid")
// // }

// // //if else ladder
// // if (age > 32){
// //     console.log("Yoy are not Kid")
// // }
// // else if(age>22){
// //     console.log("You are kid")
// // }
// // else if(age>18){
// //     console.log("you are 18 years old")
// // }
// // else{
// //     console.log("You are not human")
// // }


// // //For LOOPS in JAVA SCRIPT
// // var ar =[1,2,3,4,5,6,7,8]
// // console.log(ar);
// // for(var i = 0;i<ar.length;i++){
// //     console.log(i)
// // }


// // //while loop in JS
// // // const ac =0;//making a variable constant -used to not change value
// // // ac++;
// // // ac = ac+1;
// // let j = 0;
// // while(j<arr.length){
// //     console.log(arr[j]);
// //     j++;
// // }


// // //Do while loop in JS
// // do{
// //     console.log(arr[j]);
// //     j++
// // }while(j<arr.length);

// // //Break and Continue Statement in JS

// // //Break
// // let arra=[1,2,3,4,5,6,7,8];
// // for(let i = 0;i<arra.length;i++){
// //     if(i==2){
// //         break;
// //     }
// //     console.log(arra[i])
// // }

// // //Continue
// // let arrqa=[1,2,3,4,5,6,7,8];
// // for(let i = 0;i<arrqa.length;i++){
// //     if(i==2){
// //        continue;
// //     }
// //     console.log(arrqa[i])
// // }

// //ARRAY IN JAVASCRIPT
// let myArr =["Fan","Camera",34,null,true];
// //Array Methods
// // console.log(myArr.length)
// // myArr.pop();//removes last element
// // console.log(myArr);
// // myArr.push("Aayush");
// // console.log(myArr)

// // myArr.shift(myArr);//removes first element
// // console.log(myArr);

// // myArr.unshift("Aayush");
// // console.log(myArr);
// // console.log(myArr);\

// // String Method in Java Script
// let myLovelyString = "Aayush Is A Good Boy";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("Good"));
// console.log(myLovelyString.slice(0,1));
// console.log(myLovelyString.slice(1,2));
// console.log(myLovelyString.slice(3,4));
// console.log(myLovelyString.slice(4,5));
// console.log(myLovelyString.slice(5,6));


// d= myLovelyString.replace("Aayush","Raj")
// console.log(d,myLovelyString)

//date in JS
myDate = new Date();
a = console.log(myDate.getDay());//shows day
a = console.log(myDate);//shyows full time
a = console.log(myDate.getYear());//shows year
a = console.log(myDate.getTime());//shows only second


//DOM-Document Object Model
q=document.location;
console.log(q);