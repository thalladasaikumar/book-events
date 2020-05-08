var mongoose = require('mongoose');
// var url = 'mongodb://localhost:27017/nbad';
var url = 'mongodb+srv://root:<password>@kumardella-8dfi3.mongodb.net/nbad?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true}); //Establishing new connection to db
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.on('connected', function(){
  console.log("Mongoose connection is open to ", url);
});

// User Schema
const userSchema = new mongoose.Schema({
  userId:String,
  firstName:String,
  lastName:String,
  emailAddress:String,
  address1Field:String,
  address2Field:String,
  city:String,
  state:String,
  pinCode:Number,
  country:String
});

// Connection Schema
const connectionSchema = new mongoose.Schema({
  userId: String,
  connectionId : Number,
  connection_name : String,
  connection_category : String,
  details : String,
  dateAndTime : String,
  hostedBy : String,
  image : String
});

//UserProfile Schema
const userProfileSchema = new mongoose.Schema({
  userId: String,
  userConnection:[
    {
      connectionId: Number,
      rsvp: String
    }
  ]
});

//Username and Password
const userPassword = new mongoose.Schema({
  username: String,
  password: String
});

//Connection invites
const connectionInvites = new mongoose.Schema({
  connectionId: Number,
  connection : [
    {
      sender: String,
      receiver: String
    }
  ]
});

const userModel = mongoose.model('users', userSchema); //Model for User
const connectionModel = mongoose.model('connections', connectionSchema); //Model for Connection
const userProfileModel = mongoose.model('userprofiles', userProfileSchema); //Model for User Profile
const userPasswordModel = mongoose.model('userpasswords', userPassword); //Model for Username and password
const connectionInvitesModel = mongoose.model('connectioninvites', connectionInvites); //Model for connection invites

module.exports.userModel = userModel;
module.exports.connectionModel = connectionModel;
module.exports.userProfileModel = userProfileModel;
module.exports.userPasswordModel = userPasswordModel;
module.exports.connectionInvitesModel = connectionInvitesModel;
