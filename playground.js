const fs = require("fs");

const persons = [
    { id: 1, fullname: "sepideh kashefi", phone: "09120000000", email: "test@email.com" },
    { id: 2, fullname: "shima salimi", phone: "09120000000", email: "test@email.com" },
    { id: 3, fullname: "arash rahimi", phone: "09120000000", email: "test@email.com" },
];

fs.writeFileSync("contacts.json", JSON.stringify(persons));

//Variables Bindings
const data = fs.readFileSync("contacts.json");
const returnedPersons = JSON.parse(data.toString());
console.log("🚀 ~ returnedPersons:", returnedPersons)
