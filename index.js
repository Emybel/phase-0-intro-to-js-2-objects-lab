// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAdress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    for (const key in employee) {
        delete employee[key];
    }

    employee.name = 'Sam';
    return {...employee, [key]: value,};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee [key] = value
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    for (key in newEmployee){
        delete newEmployee[key]
    };
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete  employee[key];
    return employee;
}
