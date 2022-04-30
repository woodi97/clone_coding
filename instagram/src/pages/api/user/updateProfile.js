import User from "../../../models/User"

const updateProfile=(req,res)=>{
    const {userID,img_base64}=req.body;
    const respond=(updatedUserInfo)=>{
        //console.log(updatedUserInfo)
        res.json({updatedUserInfo});
    }
    User.updateMyProfile(userID,img_base64)
    .then(respond)
    .catch(console.err);
}

export default updateProfile;