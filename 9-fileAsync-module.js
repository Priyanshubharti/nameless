const {readFile , writeFile} = require('fs');

readFile('./content/first.txt' , (err,result)=>{
if(err){
    console.log(err);
    return;
}
const first = result;
readFile('./content/subfolder/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const second = result;
    writeFile('./content/result-async.txt',
    `Here is the result:${first}, ${second}`
    ,'utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    })
})
})