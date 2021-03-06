Array;

type Student = {
  passed: boolean;
};

const students: Student[] = [
  { passed: true },
  { passed: true },
  { passed: false },
];

const result = students.every((student) => student.passed);

console.log(`result`, result);

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = true;
}
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
console.log(animals.every<Cat>(isCat));
