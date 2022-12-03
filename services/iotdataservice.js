const iotData = require('../data.json')

module.exports.getIoTdata = () => {
    try{
        return iotData;
    } catch(error){
        console.log(error);
        throw new Error(error);
    }
    
}