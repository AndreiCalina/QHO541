module.exports = (req, res) => {
    // Clear the session or any user authentication data
    // For example, if you are using Express session middleware:
    req.session.destroy((error) => {
        if (error) {
            console.error("Error destroying session:", error);
            // Handle error if session could not be destroyed
            return res.status(500).send("Error logging out");
        }
        // Redirect the user to the login page or any other desired page
        res.redirect('/');
    });
};