//A function that takes at least three arguments and returns the result of some set of operations using those arguments
const f1 = function(a,b,c,d){
	return (a+b-c)/((d+a)*c)
};

//console.log(f1(1,1,1,1));

//A function that takes no arguments and returns something
const f2 = function(){
	return Math.PI
};

//console.log(f2());

//A function that takes arguments, does something but does not return anything
const f3 = function(name, surname){
	console.log("Hi " + name + " " + surname);
};

//f3("Poghos", "Petrosyan");

//A function that takes three strings and returns the string that is the longest
const f4 = function(str1, str2, str3){
	if(str1.length >= str2.length && str1.length >= str3.length){
		return str1
	}else if(str2.length >= str1.length && str2.length >= str3.length){
		return str2
	}else{
		return str3
	}
};

//console.log(f4("aa","aa","aaa"));

//A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger
const f5 = function(a,b){
	if(a===b){
		return 0
	}else if(a>b){
		return 1
	}else{
		return -1
	}
};

//console.log(f5(0,0));

//Create a multiply function (that multiplies the two given arguments together and returns the result) 
const mult = function(a,b){
	return a*b
};

//console.log(mult(3,9));

//Create a divide function (that divides the first argument by the second and returns the result)
const div = function(a,b){
	return a/b
};

//console.log(div(78,2));

//Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or /
const triangleArea = function(base, height) {
  return div(mult(base, height),2)
};

//console.log(triangleArea(5,12));

//Create a function called numLength that takes a number and returns the number of characters in the number
const numLength = function(n){
	return String(n).length	
};

//console.log(numLength(8940));

//Create a function that takes two strings and a number.  If the length of the two strings concatenated together is greater than the given number, return 1, else return -1
const f10 = function(str1, str2, n){
	if((str1+str2).length>n){
		return 1
	}else{
		return -1
	}
};

//console.log(f10("a", "ss", 2));

//Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', return the area of a rectangle using the two numbers as base and height.  If the string is 'triangle', return the area of a triangle (you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1.
const runStuff = function(a,b,str){
	if(str === "rectangle"){
		return mult(a,b)
	}else if(str === "triangle"){
		return triangleArea(a,b)
	}else{
		return -1
	}
};

//console.log(runStuff(5,4, "rectangle"));