import connectDB from '../../middleware/mongodb';
import User from '../../models/user';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { userID, password } = req.body;
    if (userID &&password) {
        try {
          const user = new User({
            userID,
            password,
          });
          // Create new user
          const usercreated = await user.save();
          return res.status(200).send(usercreated);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      } else {
        res.status(422).send('data_incomplete');
      }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);