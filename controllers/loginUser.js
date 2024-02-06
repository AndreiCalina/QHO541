const Users = require('../models/Users');
const bcrypt = require('bcrypt');
const path = require('path');

module.exports = async (req, res) => {
    console.log('I am in login user controller');
    const { username, password } = req.body;

    try {
        // Find the user by username
        const user = await Users.findOne({ username });

        // If user is not found, redirect back to login page with invalid user message
        if (!user) {
            console.log("User not found");
            return res.redirect('/loginForm?error=invaliduser'); // Redirect to /loginForm with invalid user error
        }

        // Compare the provided password with the hashed password stored in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            console.log("Invalid password");
            return res.redirect('/loginForm?error=invalidpassword'); // Redirect to /loginForm with invalid password error
        }

        // Password is valid, redirect to home page or dashboard
        console.log("Login successful");
        req.session.userId = user._id;
        console.log(req.session);
        //req.session.userType = user.type;
        res.redirect('/'); // Adjust the redirect URL as needed
    } catch (error) {
        console.error("Error occurred during login:", error);
        res.redirect('/loginForm?error=internalerror'); // Redirect to /loginForm with internal server error
    }
};
