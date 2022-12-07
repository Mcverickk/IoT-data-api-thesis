const service = require('../services/iotdataservice')

module.exports.getIoTdata = async (req,res,next) => {
    let response = {
        status: 400,
        message: "",
        body: {}
    }
    try{
        const result = await service.getIoTdata();

        response.status = 200;
        response.message = "IoT data fetched!"
        response.body = result;
    } catch(error){
            console.log(error)
            response.message = error.message;
    }
    res.status(response.status).send(response);
}
