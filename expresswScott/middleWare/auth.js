
const attachUser = (request, response, next) => {
    request.user = "Billy";
    next();
}

const authenticateUser = (request, response, next) => {
    if (request.user === 'Billy') {
        console.log('Authenticated');
        next();
    }
    else{
        response.status(401).send("U DUN GOOFED");
    }
    
}

module.exports = {
    attachUser, 
    authenticateUser,
}