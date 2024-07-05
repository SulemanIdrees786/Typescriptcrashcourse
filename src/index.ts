let id = 5;

console.log("id", id);

let list: number | string = 3;
console.log(list);
console.log(3 + 5);
// Basic types
let company: string = "Tek DEvs";
let ispublished: boolean = true;
let x: any = "hello";
let ids: number[] = [1, 3, 4, 2, 5];

let arr: any[] = [1, true, "dd"];

//tupple
let person: [number, string, boolean] = [1, "brad", true];

let employee: [number, string][];
employee = [
  [1, "brad"],
  [2, "rrr"],
  [3, "eee"],
];
// union

let pid: (string | number)[];
pid = [1, "a", 3, "e", "r"];

let gid: string | number;
gid = 2;

//enums
enum d1 {
  up,
  down,
  left,
  right,
}

console.log("enum " + d1.up);

// objects

// const user: {id : number,  name : string } = {
//     id : 1,
//     name : 'www'
// }

type User = { id: number; name: string };
const user: User = {
  id: 1,
  name: "www",
};

const car: { Type: string; model: string; year: number } = {
  Type: "toyota",
  model: "corola",
  year: 20 - 6 - 2013,
};

const car2: { Type: string; model: string; engine?: number } = {
  Type: "toyota",
  model: "corola",
  //year: 20 - 6 - 2013,
};
// type Assertion
let cid: any = 1;
// let coustomer = <number>cid
let coustomer = cid as string;
coustomer = "s";

// function
function addnum(x: number, y: number): number {
  return x + y;
}
console.log(addnum(3, 4));
// interface
// interface User1 {
//   id: number;
//   name: string;
// }
// const user1: User1 = {
//   id: 1,
//   name: "www",
// };

interface User1 {
  readonly id: number;
  name: string;
  age?: number;
}
const user1: User1 = {
  id: 1,
  name: "www",
};
//user1.id = 5

// unions and primitive types use in type
type gid1 = string | number;
gid1: 2;

// interfaces in function
interface mathfun {
  (x: number, y: number): number;
}

const addnum1: mathfun = (x: number, y: number): number => x + y;
const addnum2: mathfun = (x: number, y: number): number => x - y;

//classes

// class person1 {
//   id: number;
//   name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }
//   register() {
//     return `${this.name} is registered`;
//   }
// }
// const brad = new person1(1, "ee");

// console.log(brad);
// console.log(brad.register());
//implemented interface in class

interface pi {
  id: number;
  name: string;
  register(): string;
}

class person1 implements pi {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;
  constructor(id: number, name: string, position: string) {
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
function getArray<Type>(items: Type[]): Type[] {
  return new Array().concat(items);
}

let numarray = getArray<number>([1, 2, 3, 4]);
let strarray = getArray<string>(["aa", "ddd", "fff"]);

numarray.push(2);

//

function getfirstelement<ElementType>(narray: ElementType[]) {
  return narray[0];
}

const num1 = [1, 2, 3];
const firstnum = getfirstelement<number>(num1);

const str1 = ["1, 2, 3", "k"];
const firststr = getfirstelement<string>(str1);

const inp = document.querySelector<HTMLInputElement>(".input");

inp?.value;

const a = [1, 2, 3];

a.map(() => {
  return "sss";
});

//const map = new Map<string, Map<string,number>>();
//map.set("sdf", 3);

// type apiresponse<Data> ={
//     data: Data//any
//     iserror:boolean
// }
// const response : apiresponse <{name:string ; age:number}>={
//     data:{name:'aaaad',age:2},
//     iserror: false
// }

type apiresponse<Data extends object = { stas: number }> = {
  data: Data; //any
  iserror: boolean;
};
const response: apiresponse = {
  data: { stas: 200 },
  iserror: false,
};

/// generics examples

const score: Array<number> = [];
const name2: Array<string> = [];

function identity1(val: boolean | number): boolean | number {
  return val;
}

function identitytwo<Type>(val: Type): Type {
  return val;
}

function identity3<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

// identity3<Bootle>({

// })

// generic in ARRow and array function

function getsearchProducts<T>(products: T[]): T {
  // do some database operations
  const myindex = 3;

  return products[myindex];
}

const getmoresearchproducts = <T>(products: T[]): T => {
  const myindex = 4;
  return products[myindex];
};

interface db {
  conection: string;
  username: string;
  password: string;
}

function anotherfunction<T, U extends db>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

//anotherfunction(3,{})

interface Quiz {
  name: string;
  type: string;
}

interface course {
  name: string;
  author: string;
  subject: string;
}

class sellable<T> {
  public cart: T[] = [];

  addtocart(products: T) {
    this.cart.push(products);
  }
}
