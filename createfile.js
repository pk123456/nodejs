var fs=require('fs');
fs.writeFile('./myfile.txt','hello',(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file created');
    }
});
let file=fs.createWriteStream('./jumbo.txt');
for(let i=0;i<=1e6;i++){
    file.write('RisingStack conducted a survey during 2016 Summer RisingStack conducted a survey during 2016 Summer to find out how developers use Node.js and what technologies they prefer with it');
  

}
file.end();