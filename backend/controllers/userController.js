import User from "../model/user.js";

export const userData = async (req, res) => {
  try {
    const { title } = req.body;
    const user = await User.create({ title });
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err });
    console.error(err);
  }
};

export const GetData = async (req, res) => {
  try {
    const user = await User.findAll(); // Fetch all records
    res.status(200).json(user); // Return the data in JSON format
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

export const userDelete = async (req, res) => {
  try {
    const { id } = req.params; // Extract ID from route params
    const user = await User.destroy({ where: { id } }); // Use `destroy` to delete a record

    if (user) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
    console.error(error);
  }
};

