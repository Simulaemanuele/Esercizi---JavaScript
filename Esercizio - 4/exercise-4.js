// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {

  if (role == 'ceo') {

    return role = '2200';

  } else if (role == 'manager') {

    return role = '1800';

  } else if (role == 'cto') {

    return role = '1800';

  } else if (role == 'developer') {

    return role = '1500';

  } else {

    return role = '1000';

  }

};

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(`ceo: ${ceoSalary} \n`);
console.log(`manager: ${managerSalary} \n`);
console.log(`cto: ${ctoSalary} \n`);
console.log(`developer: ${developerSalary} \n`);
console.log(`default: ${otherSalary} \n`);