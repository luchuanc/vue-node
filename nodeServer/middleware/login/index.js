const User = require('../../server/models/userModel.js');
const msgInfo = require("../../utils/msgInfo");
const log = require("../../logs");
class Login {
    constructor(){

    }
    find(opt){
        return new Promise((resolve, reject)=>{
            User.find({"username":opt.username,"password":opt.password},(err,userInfo)=>{
                if(err) reject(err);
                log.logDebug.debug("查询信息："+JSON.stringify(userInfo));
                if(userInfo && userInfo.length){
                    resolve(msgInfo("MSG_SUCCESS","success"));
                }else{
                    resolve({
                        code:2,
                        msg:"未找到该用户名！"
                    });
                }
                
            });
        })
    }
}
module.exports = Login;
