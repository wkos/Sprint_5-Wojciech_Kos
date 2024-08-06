persons = [
  { firstName: "Roman", lastName: "Kowalski", nickname: "Namwok", age: 25 },
  { firstName: "Halina", lastName: "Malina", nickname: "Anilam", age: 12 },
  { firstName: "Halina", lastName: "Malinaa", nickname: "Anilam", age: 13 },
  { firstName: "Jan", lastName: "Nowak", nickname: "Najwon", age: 8 },
];

function addMostCommonLetters(persons) {
  const result = [];
  persons.forEach((person) => {
    const text = person.firstName + person.lastName + person.nickname;
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

    const newProperty = [
      firstAlphabeticalLetter,
      lettersWithMaxFrequency[0][1],
    ];
    person.mostCommonLetter = {
      letter: newProperty[0],
      count: newProperty[1],
    };
    result.push(person);
  });
  return result;
}

console.log(addMostCommonLetters(persons));
