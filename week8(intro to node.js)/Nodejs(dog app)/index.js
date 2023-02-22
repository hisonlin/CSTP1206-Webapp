//Create our own server using node.js
//wee need to have a module called as HTTP

//TCP - Transmission Control Protocol
//HTTP- Hyper Text Transfer Protocal
                    //Request -- Please send me the data
//Client(browser) <==================>Server(Computer)
                    //RESPONSE -- Sure you can have the data


//If you are using ES5
const http = require('http');//HTTP module is pre installed in nodejs
const PORT = 2000;

const server = http.createServer((request, response)=>{
    console.log(request.url);
    //we have to tell the response is of some type text/html
    response.setHeader('Content-type', 'text/html');

    if(request.url === '/dog'){
        response.write('<img width-"500" src="https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg">')
    }else{
        //what data you want to send to the client/browser
        response.write("<h1 style='color: red'>Thankyou for using my server!</h1>");
    }
    //end my response
    response.end();
})

server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})