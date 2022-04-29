import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const user = new Schema({
  userID: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true
  },
  profile_img: Buffer,
  follower_num: {type: Number, default: 0},
  following_num: {type: Number, default: 0},
});

user.statics.findOneByUsername = function (userID) {
    return this.findOne({
      userID,
    }).exec();
  }
mongoose.models = {};


const User= mongoose.model('User', user);
export default User;