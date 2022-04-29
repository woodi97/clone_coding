import mongoose from 'mongoose';

const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db=mongoose.connection;
  db.on('error', console.error);
  db.once('open', () => {
    console.log('connected to mongodb server');
  });
  return handler(req, res);
};

export default connectDB;