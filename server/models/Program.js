var mongoose = require('mongoose');

// Create the MovieSchema.
var ProgramSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }, 
  college: String,
  province: String,
  semesters:  Number,
  	
  isOpen: Boolean,
  employmentRate: { type: Number, min: 0, max: 100 }
   
});

// Export the model schema.
module.exports = ProgramSchema;
