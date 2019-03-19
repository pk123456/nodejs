var fs=require("fs");
fs.exists('./demos1',(result1)=>{
    if(result1){
        
        console.log('Directory Already exists');
    }else{
fs.mkdir('./demos1',(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
        console.log('I am created');
    }
});
    }
});

console.log('I am called first');