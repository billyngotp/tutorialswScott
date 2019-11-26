const http = require('http');
//const requestHandler = require("./handler")
const PORT = 3000;
const mockData = require("./mock.json");

//req handler first place we can access request and do logic
const server = http.createServer((request,response) => {
    //console.log(mockData);
    response.writeHead(200 , {"Content-Type" : "application/json"});
    const newMock = mockData
        .filter (datum => datum.gender === 'male')
        .map(datum => datum._gender);

    response.end(JSON.stringify(newMock));
})

server.listen(PORT, (err) => {
    if(err) {
        console.log("Errorrorororor has occured, please fix");
        return
    }
        console.log(`You are running on port ${PORT}`);
    
});