const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}

console.log("Năm sản xuất của xe là:", car.year);

const person = {
    name: "Vân",
    address: {
        street: "Cộng Hòa",
        city: "TP HCM",
        country: "Việt Nam"
    }
}

console.log("Tên đường của", person.name, "là:", person.address);

const student = {
    name: "Vân",
    grades: {
        math: 10,
        english: 5
    }
}

console.log(student["grades"]["math"]);

const settings = {
    volume: "100%",
    brightness: "100%"
}

settings.volume = "50%"

console.log(settings);

const bike = {
    color: "xanh mint"
}

console.log(bike);

const employee = {
    name: "Vân",
    age: 25
}

delete employee.age;

console.log(employee);

const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}

console.log(school);