const employee = {name: 'Dominique', streetAddress: '123 Seasme Street'};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployeeWith = {...employee};
    newEmployeeWith[key] = value;
    return newEmployeeWith;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] =value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployeeWithout = {...employee};
    delete newEmployeeWithout[key];
    return newEmployeeWithout;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}