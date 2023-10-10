const employee = {
    name : "Sam",
    streetAddress : "11 Broadway",
};
function updateEmployeeWithKeyAndValue(employeeCopy, key, value) {
    return {
      ...employeeCopy,
      [key]: value,
    };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    value = "12 Broadway"
    employee[key] = value
    return employee
  }
  function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {
        ...employee
      };
      delete newEmployee[key]
      return newEmployee
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key){
      delete employee[key]
      return employee
  }