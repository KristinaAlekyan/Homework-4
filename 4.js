/*2. Given an array of integers. All numbers are unique. Find the count of missing numbers
between minimum and maximum elements to make integers sequence.*/

let arr=[1,3,2,5,9,7,10];

arr.sort(function(a,b){
	if(a>b) return 1;
	else return -1; 
});

let num = arr[arr.length-1]-arr[0]-arr.length+1;

console.log(num);






/*3.Convert a long phrase to its acronym.*/

let str = 'Prisoner of War';    //let str='Have a good night'

let res = str.split(" ");
let arr=[];
	for(let i=0; i<res.length; i++){
	arr.push(res[i].charAt(0).toUpperCase());		
	}  

let strAcronym = arr.join('');
console.log(strAcronym);



/*4. Given a string of digits, output all the contiguous substrings of length n in that string.*/

let str;

let n;
let arrNew=[];
function subStr(str,n){


for (let i=0; i < str.length-n+1; i ++){

arrNew.push(str.slice(i,i+n));
}
return arrNew;
}
console.log(subStr('1234567',8));

 







