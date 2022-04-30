import connectDB from '../../../middleware/mongodb';
import User from "../../../models/User";

const getUserInfo=(req,res)=>{
    const {userID}=req.body;
    const respond = (userInfo)=>{
        res.json({
            message: 'userInfo get',
            userID: userInfo.userID,
            profile_img: userInfo.profile_img,
            follower_num:userInfo.follower_num,
            following_num:userInfo.following_num,
        });
    }
    User.findOneByUsername(userID).then(respond).catch((err)=>{
        console.log(err);
    })
};

export default connectDB(getUserInfo);