function errorsHandler(err, req, res, next){
    res.status(500);

    console.log(err)
}

module.exports = errorsHandler;