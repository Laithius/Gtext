
import Contact from '../models/PostMessage.js';
import express from 'express';
const router = express.Router();

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


// create a new contact
router.post('/contacts', async (req, res) => {
  const { name, number, address } = req.body;

  const newContact = new Contact({ name, number, address });

  try {
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});


  // update an existing contact by id
  router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, number, address } = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('No contact with that id');
    }
  
    const updatedContact = { name, number, address, _id: id };
  
    try {
      await Contact.findByIdAndUpdate(id, updatedContact, { new: true });
      res.json(updatedContact);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  });
  
  // delete an existing contact by id
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send('No contact with that id');
    }
  
    try {
      await Contact.findByIdAndRemove(id);
      res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  });
  
  export default router;
export const getPosts = (req, res) => {
    res.send('THIS WORKS!');
    }
 
