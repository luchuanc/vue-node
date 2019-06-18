const mongoose = require('mongoose');
const config = require('../config');
const log = require("../logs");
module.exports = ()=>{
    mongoose.connect(config.mongodb,config.options, function(err, res) { //连接mongodb数据库 
        if(err) {
            log.logError.error('[mongoose log] Error connecting to: ' + config.mongodb + '. ' + err);
        } else {
            log.logDebug.debug('[mongoose log] Successfully connected to: ' + config.mongodb);
        }
    });
    // 实例化连接对象
    var db = mongoose.connection;
    db.on('error', ()=>{
        log.logError.error("mongoDb连接失败！");
    });
    db.once('open', (callback) => {
        log.logDebug.debug('MongoDB连接成功！！');
    });
    return db;
}