const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
       type: String,
       required: true
    },
    username:{
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    } 
});

// Use a regular function to access the document being saved
userSchema.pre('save', function(next) {
    const user = this;
    const saltRounds = 10; // Higher the salt value stronger the encryption
    bcrypt.hash(user.password, saltRounds, (error, hash) => {
        if (error) {
            return next(error);
        }
        user.password = hash;
        next();
    });
});

const Users = mongoose.model('Users', userSchema, 'users');

module.exports = Users;
