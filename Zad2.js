persons = [
  { firstName: false, lastName: 2 },
  { firstName: "Roman", lastName: "Kowalski", nickname: "Namwok" },
  { firstName: "Halina", lastName: "Malina", nickname: "Anilam" },
  { firstName: "Halina", lastName: "Malinaa", nickname: "Anilam" },
  { firstName: "B", lastName: "22" },
  { firstName: "Jan", lastName: "Nowak", nickname: "Najwon" },
  { firstName: "Kamil", lastName: null },
];

function addAge(persons) {
  const personsWithNicknames = persons.filter(
    (item) => item.nickname !== undefined
  );
  const lengthOfKeys = Object.keys(personsWithNicknames[0])
    .map((item) => item.length)
    .reduce((acc, curr) => acc + curr, 0);
  personsWithNicknames.forEach((person, index) => {
    const numberOfLetters = person.firstName.length + person.lastName.length;
    if (numberOfLetters % 2 === 0) {
      person.age = numberOfLetters;
    } else {
      person.age = Math.ceil(lengthOfKeys / (index === 0 ? 1 : index));
    }
    index++;
  });
  return personsWithNicknames;
}

console.log(addAge(persons));
