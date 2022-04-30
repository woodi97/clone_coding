import jwt from "jsonwebtoken"
import connectDB from '../../../middleware/mongodb';
import User from "../../../models/User";

const verify=(token)=>{
    let decoded = null;
    try {
      decoded = jwt.verify(token, process.env.SESSION_SECRET);
      return {
        ok: true,
        userID: decoded.userID,
        role: decoded.role,
      };
    } catch (err) {
      return {
        ok: false,
        message: err.message,
      };
    }
}
const isLogin=(req,res)=>{
    const token=req.headers['cookie'];
    const result=verify(token);
    console.log(result);
    if(result.ok){
        req.userID=result.userID;
        return true;
    }else{
        return false;
    }
}

const getMyInfo=(req,res)=>{
    if(isLogin(req,res)){
        User.findOneByUsername(req.userID)
        .then(userInfo=>{
            res.json({userInfo})
        })
        .catch(err=>console.log(err));
    }else{
        res.json({
            message: "you are not logined"
        })
    }
}

export default connectDB(getMyInfo);