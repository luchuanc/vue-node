const log4js = require("log4js");
const log4js_config = require("./log4js.json");
log4js.configure(log4js_config);

exports.logError = log4js.getLogger('error');
exports.logDebug = log4js.getLogger('debug');
exports.getLogerByName = (name)=>{
    return log4js.getLogger(name);
}
exports.logInfo =  log4js.getLogger();