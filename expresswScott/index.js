//package built on top of node to provide easier access to build simple servers
//nodemon makes it easy to develop on servers
    //does not restart when you implement changes, nodemon makes it easy
const express = require('express');
const app = express();
const PORT = 3001;
const apiRouter = require('./routes/api')
const cors = require('cors')
const passport = require('./config/passport')

//Security
app.use(cors());
app.use(passport.initialize());

//2 ways to do requests
//basic way 
app.use('/api', passport.authenticate('jwt', {session : false} ), apiRouter);

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



