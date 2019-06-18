const codeMap = {
    "MSG_SUCCESS":{
        code:0,
        msg:"请求成功"
    },
    "MSG_NETERROR":{
        code:-1,
        msg:"网络错误"
    },
    "MSG_SERVERERROR":{
        code:-2,
        msg:"哎呀，出错了！"
    }
}
module.exports = (name,data)=>{
    if(codeMap[name]){
        if(data){
            return Object.assign(codeMap[name],{data:data});
        }else{
            return codeMap[name];
        }
        
    }else{
        return {
            code:-3,
            msg:"未知错误！"
        }
    }
}