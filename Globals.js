const amt = 12;
if(amt>12)
console.log("greater");
else
console.log('smaller');
console.log("Yes i know this sucks!!!")

//GLOBALS - NO WINDOWS 

//__dirname  - path to current directory
//__filename - file name
//require    - function to use modules(CommonJS)
//module     - info about current module(file)
//process    - info about env where the program is being executed 

console.log(__dirname);
setInterval(()=>{
console.log("Hello World")
},1000)
console.log(__filename);