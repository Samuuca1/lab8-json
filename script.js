
// Part 1 - Creating Objects
let student = {
    name: "Samuel",
    age: 28,
    enrolled: true,
    courses: ['Math', 'Database', 'WRIT120', 'JavaScript'],
    basicinfo: function(){
        console.log("Hey, my name is " + this.name + " and I am enrolled to " + this.courses);
    }
};

console.log(student.age);
console.log(student.name);
student.basicinfo();
console.log("\n");

//Part 2 Json (Convert JSON into a JS Object)

let jsonString = '{"name":"Samuel" , "age": 28, "enrolled": true, "courses":["Math", "Database", "WRIT120", "JavaScript"]}';
let jsonJSObj = JSON.parse(jsonString);
console.log(jsonJSObj.name);
// Part 2 Json (Stringify)

let student2 = {
    name2: "Julio",
    age2: 33
};

let jsonStringify = JSON.stringify(student2);
console.log(jsonStringify);
console.log("\n");

// Part 3 Destructuring 

