var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (value) {
        this.name = value;
    };
    return User;
}());
var u1 = new User("Harsh", 25);
u1.getName();
