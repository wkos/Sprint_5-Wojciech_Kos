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
