const http = require('http');

// server create kar rahe hai , abhi run nahi kar rahe hai
// create sever method hai

const server = http.createServer((req, res ) => 
{
    res.sendDate("learn backend");
    
})