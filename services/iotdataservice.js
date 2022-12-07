const mongoose = require('mongoose');
const mongodb = require('mongodb');
const IotData = require('../database/models/iotdataModel');
const {formatMongoData} = require('../helper/dbHelper');

const ObjectId = mongodb.ObjectId;

module.exports.getIoTdata = async () => {
    try{

        let iotData = await IotData.find();
        let l = iotData.length;
        let result = iotData[l-1];
        return formatMongoData(result);
    } catch(error){
        console.log(error);
        throw new Error(error);
    }
    
}

module.exports.getTweetsByUser = async (data) => {
    try{
        let tweets = await Tweet.find({userId: data.userId});
        return formatMongoData(tweets);

    }catch(error){
        console.log('Something went wrong ==> Service => getTweetsByUser ',error)
        throw new Error(error);
    }
}