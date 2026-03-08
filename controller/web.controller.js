const Contact = require("../models/contact.model");

exports.contact = async (req, res) => {
  const { name, email, message } = req.body

  const task = await Contact.create({
    name: name,
    email: email,
    message: message
  });

  res.json(task);
};