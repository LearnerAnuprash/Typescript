//TODO *** Creating a class and accessing it using an object *** //
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
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("Milton", 1200);
//TODO *** Another class Example *** //
var HumanMaker = /** @class */ (function () {
    function HumanMaker(name) {
        this.age = 0;
    }
    return HumanMaker;
}());
var h1 = new HumanMaker("Anuprash");
//TODO **** Using this. keyword **** //
//? Two ways of using this. keyword . ( 1st one is : ) ************
var BubbleGum = /** @class */ (function () {
    function BubbleGum(quantity, brand) {
        this.quantity = quantity;
        this.brand = brand;
        this.quantity = quantity;
        this.brand = brand;
    }
    return BubbleGum;
}());
//? Another method of using this.keyword . ( 2nd one is :) ***********
var ChewingGum = /** @class */ (function () {
    function ChewingGum(quantity, brand) {
        // template value parsing
        this.quantity = quantity;
        this.brand = brand;
    }
    return ChewingGum;
}());
//TODO  Public and Private Access Modifier
var Movie = /** @class */ (function () {
    function Movie(name) {
        this.name = name;
    } // change public to private and experiment yourself
    return Movie;
}());
var m1 = new Movie("Kuch Kuch Hota hai");
m1.name = "I";
// *** Extending a class
var phone = /** @class */ (function () {
    function phone(brand) {
        this.brand = brand;
    }
    return phone;
}());
var wifi = /** @class */ (function (_super) {
    __extends(wifi, _super);
    function wifi(worldlink) {
        return _super.call(this, worldlink) || this;
    }
    wifi.prototype.getValue = function () {
        console.log(this.brand);
    };
    return wifi;
}(phone));
var w1 = new wifi("Apple");
w1.getValue();
