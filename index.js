var child_process = require('child_process');
var http = require('http');
var url = require('url');
var queryString = require('querystring');
var fs = require('fs');


var server = http.createServer(function(req,res){
    try{
        console.log("\n\n\n\n::::::::::::"+req.url+"\n\n\n:::::::::::::::::::::::::::;\n\n\n\n");
        
        if(req.url == "/")
        {
            console.log("blank and no nesting received");
            fs.readFile("./welcomePage",function(err,data){
                console.log(data);
                res.end(data);
                
            });
            return;
        }
        else
        {
            if(req.url.indexOf("/rajeshpatkaride")==-1)
            {
                fs.readFile("."+req.url,function(err,data){
                    console.log(""+data);
                    res.end(data);
                
                });
                return;
            }
        }
         console.log("\n\n\n\n::::::::::::"+req.url+"\n\n now sending the comipliing data \n:::::::::::::::::::::::::::;\n\n\n\n");
        res.setHeader("Content-type","text/html");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");


        var sourceFile = "/home/administrator/NodejsProjects/LearningWebSockets/Main.java";
        var sourcePath = "/home/administrator/NodejsProjects/LearningWebSockets/";
        var buildPath = "/home/administrator/NodejsProjects/LearningWebSockets/";
        var buildClass = "p1.Main";
        
        var outputFile = "/home/administrator/NodejsProjects/LearningWebSockets/output.txt";
    //    for(var x in req) console.log(x)
        console.log(req.query);
        console.log(req.url);
        var urlobj = url.parse(req.url,true);
        console.log(urlobj.query.javacode);
        fs.writeFile(sourceFile,urlobj.query.javacode);
        
        var terminal = child_process.exec(
        'javac -d . '+sourceFile,function (exeError, executionOutput , exestdErr) {
        
        console.log('child process exited with code ' + executionOutput);
            if(exeError) // if there is an error there is a propertry in exeError called code which becomes 2 on error else its 1 on successful run of the command
            {
                console.log("Java Code FAILED : "+JSON.stringify(exeError));
                console.log("Java Code FAILED : "+exeError);
                res.write(exeError);
                res.end('********************* Java Compilation FAILED **************************');
            }
            else
            {
                console.log("Java Code Compiled Successfully : "+JSON.stringify(executionOutput));
                console.log("Java Code Compiled Successfully : "+executionOutput);
                child_process.exec('java -cp '+buildPath + " "+buildClass,function(runError , runOutput , runstdErr){
                    if(runError)
                    {
                        console.log("RUNTIME ERROR : "+runError);
                        console.log("RUNTIME ERROR : "+JSON.stringify(runError));
                        res.write(runError);
                        res.end('********************* Java Runtime FAILED **************************');
                    }
                    else
                    {
                        console.log("SUCCESSFULLL RUN \n\n :::::::::::::::: \n\n"+runOutput);
                        res.write(runOutput);
                        res.end('********************* Java Code Compiled SUCCESSFULLY **************************');
                    }    
                
                });
            }
            console.log();
            
            
        });
    }catch(e){}
})
server.listen(3000,function(data){console.log("server started listening on port 3000")});








  /*var javarun = child_process.spawn('java',['p1.Main']);
  javarun.on('data',function(data){console.log('stdout: ' + data);});
*/

/*
terminal.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});

*/
/*var stk = new Array(10);
var st = 10;
//var temp = require("./Circle.js");

function push(v)
{
    if(st===0)
    {
        console.log("stack overflow");
        return;
    }
    st--;
    stk[st]=v;
}

function pop()
{

}

function print()
{
    console.log(stk);
}
console.log("done loading module");
*/
