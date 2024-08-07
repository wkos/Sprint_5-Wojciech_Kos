persons = [
  { firstName: false, lastName: 2 },
  { firstName: "Roman", lastName: "Kowalski" },
  { firstName: "Halina", lastName: "Malina" },
  { firstName: "B", lastName: "22" },
  { firstName: "Jan", lastName: "Nowak" },
  { firstName: "Kamil", lastName: null },
];

function createNickname(person) {
  if (
    typeof person.firstName === "string" &&
    typeof person.lastName === "string" &&
    person.firstName.length >= 3 &&
    person.lastName.length >= 3
  ) {
    const fromFirstName = person.firstName
      .slice(person.firstName.length - 3)
      .split("")
      .reverse()
      .join("");
    const fromLastName = person.lastName
      .slice(0, 3)
      .split("")
      .reverse()
      .join("");
    const nickname = fromFirstName + fromLastName;
    return nickname.charAt(0).toUpperCase() + nickname.slice(1).toLowerCase();
  } else {
    return null;
  }
}

function addNicks(persons) {
  const updatedPersons = persons.map((person) => Object.assign({}, person));
  updatedPersons.forEach((person) => {
    const nick = createNickname(person);
    if (nick !== null) {
      person.nickname = nick;
    }
  });
  return updatedPersons;
}
