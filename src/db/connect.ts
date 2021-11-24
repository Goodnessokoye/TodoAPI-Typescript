import mongoose from 'mongoose';

const connectDB = (url: string) => {
  return mongoose
    .connect(url)
    .then(() => console.log('connected to DB...'))
    .catch((err) => console.log(err));
};

export default connectDB;

const User = { user: 'me', age: 2, school: 'tenece' };
