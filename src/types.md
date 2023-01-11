
let name: string = "Lauren";

OR..

let name: string;
name = "Lauren";

------

let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

role = [5, tree]

--------
let person: Object; <--- not recommneded

So..

type Person = {
    name: string;
    age: number;
}

let person: Person = {
    name: "Lauren",
    age: 36
}

OR make one property optional..

type Person = {
    name: string;
    age?: number;
}

let person: Person = {
    name: "Lauren"
}

if we want to make a variable of a type: Person...

let lotsOfPeople: People[];

if we want to make a variable two different types: Union..

let age: number | string;

define a function with a type..

function printName(name: string) {
    console.log(name)
}

printName("Lauren");

OR declare a funtion type...

let printName: Funtion; <--- not recommended

let printName: (name: string) => void; <--- return type void

Any Value

let name: any; <-- not recommneded

let personName: unknown;

------------------

Alias with types (= type &)

type X = {
    a: string;
    b: number;
}

type Y = X & { <-- type extending
    c: number;
    d: string;
}

this access' all values a to d

Alias with interface (extends)

interface Person {
    name: string;
    age?: number;
}

interface Guy extends Person { <--- interface extending
    profession: string;
}

You can extend properties of person insode of X too...

type X = Person & {
    a: string;
    b: number;
}

Or Vicea Versa

interface Person extends X {
    name: string;
    age?: number;
}