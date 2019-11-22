//package built on top of node to provide easier access to build simple servers
//nodemon makes it easy to develop on servers
    //does not restart when you implement changes, nodemon makes it easy
const express = require('express');
const {attachUser, authenticateUser} = require('./middleWare/auth');
const app = express();
const PORT = 3001;
const businessRouter = require ('./routes/api/business.route');
const userRouter = require("./routes/api/User.route")
const cors = require('cors')

//Security
app.use(cors());

app.use(attachUser)
app.use(authenticateUser);

//2 ways to do requests
//basic way 
app.use('/api', businessRouter);
app.use('/api', userRouter);

app.use("/", (request, response) => {
    response.send("WeLCOME BeEp BoOp BoP");
});



app.listen(PORT, (err) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(`You Are listening on port ${PORT}`);
})



