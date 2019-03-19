var fs= require('fs');
var http=require('http');
http.createServer((req,res)=>{
    //fs.readFile("./jumbo.txt",(err,data)=>{
       // if(err){
           // res.end(err);
       // }
       // else{
            //res.end(data);
      //  }
   // })
   let src=fs.createReadStream('./jumbo.txt');
   src.pipe(res);
   
}).listen(5000);
console.log('i am running');
var server=http.createServer();
server.on('request',(req,res)=>{

    res.end('<h1>how are u</h1>')
});
server.listen(4000);
console.log(server.eventNames());
