function createNickname(person) {
  const firstName = person.firstName;
  const lastName = person.lastName;
  if (
    typeof firstName === "string" &&
    typeof lastName === "string" &&
    person.firstName.length >= 3 &&
    person.lastName.length >= 3
  ) {
    const fromFirstName = person.firstName
      .slice(firstName.length - 3)
      .split("")
      .reverse()
      .join("");
    const fromLastName = lastName.slice(0, 3).split("").reverse().join("");
    const nickname = `${fromFirstName}${fromLastName}`;
    return `${nickname.charAt(0).toUpperCase()}${nickname
      .slice(1)
      .toLowerCase()}`;
  }
}

function addNicks(persons) {
  const updatedPersons = persons.map((person) => {
    const nick = createNickname(person);
    if (nick) {
      person.nickname = nick;
    }
    return person;
  });
  return updatedPersons;
}

function addAge(persons) {
  const personsWithNicknames = persons.filter((item) => item.nickname);
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
  });
  return personsWithNicknames;
}

function addMostCommonLetters(persons) {
  const result = persons.map((person) => {
    const text = `${person.firstName}${person.lastName}${person.nickname}`;
    const frequency = {};
    for (let letter of text) {
      if (frequency[letter]) {
        frequency[letter]++;
      } else {
        frequency[letter] = 1;
      }
    }

    let maxFrequency = 0;
    const values = Object.values(frequency);
    for (let value of values) {
      if (value > maxFrequency) {
        maxFrequency = value;
      }
    }

    const lettersWithMaxFrequency = [];
    for (let [key, value] of Object.entries(frequency)) {
      if (value === maxFrequency) {
        lettersWithMaxFrequency.push([key, value]);
      }
    }

    let firstAlphabeticalLetter = lettersWithMaxFrequency[0][0];
    for (let i = 1; i < lettersWithMaxFrequency.length; i++) {
      if (lettersWithMaxFrequency[i][0] < firstAlphabeticalLetter) {
        firstAlphabeticalLetter = lettersWithMaxFrequency[i][0];
      }
    }

    person.mostCommonLetter = {
      letter: firstAlphabeticalLetter,
      count: lettersWithMaxFrequency[0][1],
    };
    return person;
  });
  return result;
}
