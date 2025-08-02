
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
