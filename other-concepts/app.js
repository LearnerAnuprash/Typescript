//TODO ***Static members in TS //
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Android = /** @class */ (function () {
    function Android() {
    }
    // without using [ new Android i.e without using 'new' keyword]
    Android.getRandomNumber = function () {
        return Math.random(); // Using static
    };
    Android.version = 1.0; // Using static , we could access the version
    return Android;
}());
// The static members are not included in the instances of the class .
// i.e. if you create an object , and then try to access the memebers inside the class, the static
// members wouldn't show .
//TODO ***** ABSTRACT CLASSES ***** //
var Payment = /** @class */ (function () {
    function Payment(amount, name) {
        this.amount = amount;
        this.name = name;
    }
    return Payment;
}());
var eSewa = /** @class */ (function (_super) {
    __extends(eSewa, _super);
    // we inherit other classes from a base class Payment .
    function eSewa(gateawayKey, password) {
        var _this = _super.call(this, gateawayKey, password) || this;
        _this.gateawayKey = gateawayKey;
        _this.password = password;
        return _this;
    }
    return eSewa;
}(Payment));
var khalti = /** @class */ (function (_super) {
    __extends(khalti, _super);
    // we inherit other classes from a base class Payment .
    function khalti(gateawayKey, password) {
        var _this = _super.call(this, gateawayKey, password) || this;
        _this.gateawayKey = gateawayKey;
        _this.password = password;
        return _this;
    }
    return khalti;
}(Payment));
//TODO ***** Functions in TypeScript ***** //
function abcd(name, age, cb) { }
abcd("Anuprash", 20, function (arg) {
    console.log(arg);
}); // In the third argument of the function ,
// we passed the arrow function itself
// TODO  Optional & Default parameters in Functions
function abcdef(name, age, gender) { } // Optional parameter :  [ ?: string ]
abcdef("harsh", 25, "male");
abcdef("ram", 17); // Optional parameter gender
//TODO  Defaut parameters
function abc(name, gender) {
    if (gender === void 0) { gender = "not to be disclosed"; }
    // default argument
    console.log(name, gender);
}
abc("Anuprash");
//TODO ***** Functions: Rest Parameters *****
function ram() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Rest operator is : " ... "
}
ram(1, 2, 3, 4, 5, 6, 7, 8, 89, 9, 0);
// If we put '...' in a parameter of function , we are putting the whole array into a single variable as an array
function friends() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr);
}
friends("Anuprash", "Ravi", "Gotam", "Jack");
//Using spread operator [...]
var arr = [1, 2, 3, 4, 5];
var arr2 = __spreadArray([], arr, true);
function dus(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("Only one number");
    }
    if (typeof a === "string" && typeof b === "number") {
        console.log("two params functioin is run");
    }
    else {
        throw new Error("Somethig is wrong !");
    }
}
dus("Hey");
dus("Hello", 25);
// TODO ****** GENERICS ********
function multi(a, b, c) { }
// USe <H> or <T> or <variable_name> to create a template for initialization of data type
multi("Anurpash", "Subedi", 20);
//? ANother example of a generic
function log(val) {
    console.log(val);
}
log("hey"); // We could also write as : log("Hey")
function restaurant(obj) { }
restaurant({ name: "Momos", price: 150, code: "PATHAO12345" });
//? Another Generic Example
var BottleMaker = /** @class */ (function () {
    function BottleMaker(key) {
        this.key = key;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("ABCD");
