import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name: String,
    number: String,
    address: String
  });
  
  const Contact = mongoose.model('Contact', contactSchema);
  export default Contact;
  