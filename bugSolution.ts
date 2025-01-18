function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane Doe";

console.log(greeter(user)); //This will work because the function expects a string and it receives a string

//or

function greeter2(persons: string[]) {
    return persons.map(person => "Hello, " + person);
}

let users = ["Jane", "Doe"];
console.log(greeter2(users)); //This will also work because the function expects a string array and it receives a string array