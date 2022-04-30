import connectDB from "../../../middleware/mongodb";
import User from "../../../models/User"
import jwt from "jsonwebtoken"

const userLogin = (req, res) => {
    const { userID, password } = req.body;
    const secret = process.env.SESSION_SECRET;
    const options = {
      expiresIn: '7d',
      issuer: 'caupizza.com',
      subject: 'userInfo',
    };

    // check the user info & generate the jwt
    const check = (user) => {
      if (!user) {
        // user does not exist
        throw new Error('login failed');
      } else {
        // user exists, check the password
        if (user.password===password) {
          // create a promise that generates jwt asynchronously
          const p = new Promise((resolve, reject) => {
            jwt.sign(
              {
                _id: user._id,
                userID: user.userID,
              },
              secret,
              options,
              (err, token) => {
                if (err) reject(err);
                resolve(token);
              }
            );
          });
          return p;
        } else {
          throw new Error('login failed');
        }
      }
    };

    // respond the token
    const respond = (token) => {
      res.setHeader('Set-Cookie', token)
      res.json({
        message: 'logged in successfully',
      });
    };

    // error occured
    const onError = (error) => {
      res.status(403).json({
        message: error.message,
      });
    };
    // find the use
    User.findOneByUsername(userID).then(check).then(respond).catch(onError);
  };

  export default connectDB(userLogin);