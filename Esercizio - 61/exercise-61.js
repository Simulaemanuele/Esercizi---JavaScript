const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here

fetchPersonById = id => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const people = persons.find(item => item.id === id);
      people ? resolve(JSON.stringify(people)) : reject(new Error(`Person with id: ${id} doesn't exist`));
    }, 1000)
  })
}

fetchJobById = jobId => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const occupation = jobs.find(item => item.id === jobId);
      occupation ? resolve(JSON.stringify(occupation)) : reject(new Error(`Jobs with id: ${id} doesn't exist`));
    }, 500)
  })
}

Promise.race([fetchPersonById(1), fetchJobById(1)])
.then(item =>{
  console.log(JSON.parse(item));  
});