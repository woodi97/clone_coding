import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userID: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true
  },
  profile_img: {type:Buffer,default:0},
  postID_array: [String],
  follower_num: {type: Number, default: 0},
  following_num: {type: Number, default: 0},
});

UserSchema.statics.findOneByUsername = function (userID) {
    return this.findOne({
      userID,
    }).exec();
  }
UserSchema.statics.updateMyProfile=function(userID,img_base64){
  //console.log(img_base64);
  return this.updateOne(
    {userID,},{profile_img:img_base64}
  ).then(console.log);
}
UserSchema.statics.updateMyInfo=function(userID,field,newData){
  const newObj=`${field} : ${newData}`;
  return this.updateOne(
    {userID,},{newObj}
  ).then(console.log);
}
mongoose.models = {};


const User= mongoose.model('User', UserSchema);
export default User;