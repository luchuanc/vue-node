// import logInfo,{logError,logDebug} from "../logs";
var express = require('express');
var router = express.Router();
const log = require("../logs");
const loginMiddleware = require("../middleware/login");
const msgInfo = require("../utils/msgInfo");

router.get('/',function(req,res,next){
    res.render('index');
});
router.post('/user/login',function(req,res,next){
    log.logDebug.debug("用户登录信息"+JSON.stringify(req.body));
    const params = req.body;
    const login = new loginMiddleware();
    if(params){
        login.find(params).then((info)=>{
            res.json(info);
        }).catch((err)=>{
            res.json(msgInfo("MSG_SERVERERROR"));
        });
    }else{
        res.json({
            code:1,
            msg:"请输入正确的用户名/密码！"
        });
    }
});
module.exports = router;