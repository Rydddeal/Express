const bcrypt = require('bcrypt')
const User = require('../models/userModel')

const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                error: 'Please provide username and password'
            })
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({
                error: 'Username already exists'
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            password: hashedPassword,
            role: 'User'
        });
        await newUser.save();
        
        res.status(201).json({
            message: 'User registered successfully'
        });
    } catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
};


module.exports = {
     registerUser
}