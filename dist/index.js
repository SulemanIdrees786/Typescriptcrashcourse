"use strict";
let id = 5;
console.log("id", id);
let list = 3;
console.log(list);
console.log(3 + 5);
// Basic types
let company = "Tek DEvs";
let ispublished = true;
let x = "hello";
let ids = [1, 3, 4, 2, 5];
let arr = [1, true, "dd"];
//tupple
let person = [1, "brad", true];
let employee;
employee = [
    [1, "brad"],
    [2, "rrr"],
    [3, "eee"],
];
// union
let pid;
pid = [1, "a", 3, "e", "r"];
let gid;
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
const user = {
    id: 1,
    name: "www",
};
const car = {
    Type: "toyota",
    model: "corola",
    year: 20 - 6 - 2013,
};
const car2 = {
    Type: "toyota",
    model: "corola",
    //year: 20 - 6 - 2013,
};
// type Assertion
let cid = 1;
// let coustomer = <number>cid
let coustomer = cid;
coustomer = "s";
// function
function addnum(x, y) {
    return x + y;
}
console.log(addnum(3, 4));
const user1 = {
    id: 1,
    name: "www",
};
gid1: 2;
const addnum1 = (x, y) => x + y;
const addnum2 = (x, y) => x - y;
class person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
const brad = new person1(1, "ee");
// sub classes
class employee1 extends person1 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new employee1(3, "ddd", "dddddd");
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
let numarray = getArray([1, 2, 3, 4]);
let strarray = getArray(["aa", "ddd", "fff"]);
numarray.push(2);
//
function getfirstelement(narray) {
    return narray[0];
}
const num1 = [1, 2, 3];
const firstnum = getfirstelement(num1);
const str1 = ["1, 2, 3", "k"];
const firststr = getfirstelement(str1);
const inp = document.querySelector(".input");
inp === null || inp === void 0 ? void 0 : inp.value;
const a = [1, 2, 3];
a.map(() => {
    return "sss";
});
const response = {
    data: { stas: 200 },
    iserror: false,
};
/// generics examples
const score = [];
const name2 = [];
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
    const myindex = 3;
    return products[myindex];
}
const getmoresearchproducts = (products) => {
    const myindex = 4;
    return products[myindex];
};
function anotherfunction(val1, val2) {
    return {
        val1,
        val2,
    };
}
class sellable {
    constructor() {
        this.cart = [];
    }
    addtocart(products) {
        this.cart.push(products);
    }
}
