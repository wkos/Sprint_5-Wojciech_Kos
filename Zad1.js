function createNickname(person) {
  if (
    typeof person.firstName === "string" &&
    typeof person.lastName === "string" &&
    person.firstName.length >= 3 &&
    person.lastName.length >= 3
  ) {
    let fromFirstName = person.firstName;
    fromFirstName = fromFirstName.slice(fromFirstName.length - 3);
    fromFirstName = fromFirstName.split("").reverse().join("");

    let fromLastName = person.lastName;
    fromLastName = fromLastName.slice(0, 3);
    fromLastName = fromLastName.split("").reverse().join("");

    const nickname = fromFirstName.concat(fromLastName);
    return nickname.charAt(0).toUpperCase() + nickname.slice(1).toLowerCase();
  } else {
    return null;
  }
}

function addNicks(persons) {
  persons.forEach((person) => {
    const nick = createNickname(person);
    if (nick !== null) {
      person.nickname = nick;
    }
  });
}
