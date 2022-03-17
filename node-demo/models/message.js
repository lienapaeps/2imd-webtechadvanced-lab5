const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema maken
  const messageSchema = new Schema({
    username:  String,
    message: String
  });

  // model maken
  const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
