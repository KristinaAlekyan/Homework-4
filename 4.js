
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

 







