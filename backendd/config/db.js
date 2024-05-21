const mongoose = require('mongoose');

const connect = async () => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,});
        console.log(
             `Connected to Mongodb database: ${conn.connection.host}`);
    } catch (error) {
        console.log(`error in Mongodb ${error}`);
    }
};


module.exports = connect;
