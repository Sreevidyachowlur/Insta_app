let mongoose = require('../db');
const Schema = mongoose.Schema;
const constant = require('../utils/constant');
// const CONSTANT = require('../utils/constant');

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
    createdAt: {
    type: Date,
    default: Date.now()
  },
  description : {
    type: String,
    required: true
  },
  like: {
    type: Number,
    default:0
  },
  comment: {
    type: Array,
    default:0
  },
  userID:{
    
        type: String
        // require: true
  }
  

});

module.exports = mongoose.model('posts', postSchema);