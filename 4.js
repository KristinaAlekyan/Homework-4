
/*1. Given an array of integers, find the pair of adjacent elements that has the largest product
and return that product.*/

let arr=[2,1,5,4,1,11];
	let multArNextEl=arr.map(function(element, index){
	return element*arr[index+1];
	});
    multArNextEl.pop();

multArNextEl.sort(function(a,b){

if(a>b) return 1;
else return -1; 

})

let max = Math.max(...multArNextEl);
console.log(max);




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

let str = 'Prisoner of War';    

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
console.log(subStr('495215',3));


/*6. Given the list of the following readers:[
	{ book: "Catcher in the Rye", readStatus: true, percent: 40},
	{ book: "Animal Farm", readStatus: true, percent: 20},
	{ book: "Solaris", readStatus: false, percent: 90 },
	{ book: "The Fall", readStatus: true, percent: 50 },
	{ book: "White Nights", readStatus: false, percent: 60 } ,
	{ book: "After Dark", readStatus: true, percent: 70 }
	];
Output the books sorted by the percent in descending order which readStatus is true.*/ 



let arr=[
{ book: "Catcher in the Rye", readStatus: true, percent: 40},
{ book: "Animal Farm", readStatus: true, percent: 20},
{ book: "Solaris", readStatus: false, percent: 90 },
{ book: "The Fall", readStatus: true, percent: 50 },
{ book: "White Nights", readStatus: false, percent: 60 } ,
{ book: "After Dark", readStatus: true, percent: 70 }
];


arr.sort(function(a,b){
	a1=a.percent;
	b1=b.percent;
	if(a1>b1) return 1;
	else return -1;
	})
let arrNew=[];
for(let key in arr){
	if (arr[key].readStatus==true){
	arrNew.push(arr[key])
	}
}
console.log(arrNew);


 







