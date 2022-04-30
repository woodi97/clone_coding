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
  profile_img: Buffer,
  postID_array: [String],
  follower_num: {type: Number, default: 0},
  following_num: {type: Number, default: 0},
});

UserSchema.statics.findOneByUsername = function (userID) {
    return this.findOne({
      userID,
    }).exec();
  }
mongoose.models = {};


const User= mongoose.model('User', UserSchema);
export default User;