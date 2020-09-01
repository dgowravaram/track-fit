const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: { type: String, required: true},
  description: {type: String, required: true},
  duration: { type: Number, required: true},
  username: { type: Date, required: true},
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', userSchema);

export default Component
