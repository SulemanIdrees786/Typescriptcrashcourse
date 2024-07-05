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
var id = 5;
console.log("id", id);
var list = 3;
console.log(list);
console.log(3 + 5);
// Basic types
var company = "Tek DEvs";
var ispublished = true;
var x = "hello";
var ids = [1, 3, 4, 2, 5];
var arr = [1, true, "dd"];
//tupple
var person = [1, "brad", true];
var employee;
employee = [
    [1, "brad"],
    [2, "rrr"],
    [3, "eee"],
];
// union
var pid;
pid = [1, "a", 3, "e", "r"];
var gid;
gid = 2;
//enums
var d1;
(function (d1) {
    d1[d1["up"] = 0] = "up";
    d1[d1["down"] = 1] = "down";
    d1[d1["left"] = 2] = "left";
    d1[d1["right"] = 3] = "right";
})(d1 || (d1 = {}));
console.log("enum " + d1.up);
var user = {
    id: 1,
    name: "www",
};
var car = {
    Type: "toyota",
    model: "corola",
    year: 20 - 6 - 2013,
};
var car2 = {
    Type: "toyota",
    model: "corola",
    //year: 20 - 6 - 2013,
};
// type Assertion
var cid = 1;
// let coustomer = <number>cid
var coustomer = cid;
coustomer = "s";
// function
function addnum(x, y) {
    return x + y;
}
console.log(addnum(3, 4));
var user1 = {
    id: 1,
    name: "www",
};
gid1: 2;
var addnum1 = function (x, y) { return x + y; };
var addnum2 = function (x, y) { return x - y; };
var person1 = /** @class */ (function () {
    function person1(id, name) {
        this.id = id;
        this.name = name;
    }
    person1.prototype.register = function () {
        return "".concat(this.name, " is registered");
    };
    return person1;
}());
var brad = new person1(1, "ee");
// sub classes
var employee1 = /** @class */ (function (_super) {
    __extends(employee1, _super);
    function employee1(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return employee1;
}(person1));
var emp = new employee1(3, "ddd", "dddddd");
console.log(emp.register());
// generics
// function getArray(items: any[]): any[] {
//   return new Array().concat(items);
// }
// let numarray = getArray([1, 2, 3, 4]);
// let strarray = getArray(["aa", "ddd", "fff"]);
// numarray.push("hello");
//// so we do generics in this so number values are only store in array of nmber like string work as it is also
function getArray(items) {
    return new Array().concat(items);
}
var numarray = getArray([1, 2, 3, 4]);
var strarray = getArray(["aa", "ddd", "fff"]);
numarray.push(2);
//
function getfirstelement(narray) {
    return narray[0];
}
var num1 = [1, 2, 3];
var firstnum = getfirstelement(num1);
var str1 = ["1, 2, 3", "k"];
var firststr = getfirstelement(str1);
var inp = document.querySelector(".input");
inp === null || inp === void 0 ? void 0 : inp.value;
var a = [1, 2, 3];
a.map(function () {
    return "sss";
});
var response = {
    data: { stas: 200 },
    iserror: false,
};
/// generics examples
var score = [];
var name2 = [];
function identity1(val) {
    return val;
}
function identitytwo(val) {
    return val;
}
function identity3(val) {
    return val;
}
// identity3<Bootle>({
// })
// generic in ARRow and array function
function getsearchProducts(products) {
    // do some database operations
    var myindex = 3;
    return products[myindex];
}
var getmoresearchproducts = function (products) {
    var myindex = 4;
    return products[myindex];
};
