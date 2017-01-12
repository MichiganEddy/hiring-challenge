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
    // Salt function to be implemented, currently returns a random string.
    // Not suitable for production use!
    User.getSalt = function () {
        return "FakeSalt";
    };
    return User;
}());
