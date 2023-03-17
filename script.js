const players = ['John', 'Bob', 'Alice', 'Poppy'];

const person = {
      name: 'John Doe',
      age: 80
    };

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
const team = players;
const team1 = [...players]; // Using the spread operator to create a new copy of the array
const cap1 = { ...person }; // Using the spread operator to create a new copy of the object


export {players,person,team,team1,cap1}
