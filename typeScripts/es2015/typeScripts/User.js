"use strict";
var bcrypt = require("bcryptjs");
var User = (function () {
    function User(userName, email, password, firstName, lastName) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.salt = User.getSalt();
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    User.prototype.setFullName = function (first, last) {
        this.firstName = first;
        this.lastName = last;
        return null;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setEmail = function (address) {
        this.email = address;
        return null;
    };
    User.prototype.addComment = function (commentID) {
        this.comments.push(commentID);
        return null;
    };
    // Salt function to be implemented, currently returns a random string.
    // Not suitable for production use!
    User.getSalt = function () {
        return bcrypt.genSaltSync(10);
    };
    User.passwordHash = function (password, salt, callback) {
        return bcrypt.hash(password, salt, function (err, hash) {
            if (err) {
                callback(err);
            }
            callback(hash);
        });
    };
    return User;
}());
//# sourceMappingURL=User.js.map