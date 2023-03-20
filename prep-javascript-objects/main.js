const person = {
  firstName: 'Tiffany',
  lastName: 'Liem',
  hobby: 'eat'
};

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'software engineer';

console.log("The person's current job is:", person.job);

person['previousJob'] = 'ecom specialist';
console.log("The person's previous job is:", person.previousJob);

console.log(person);
