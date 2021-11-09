interface Employee {
  pay(): void;
}

class FullTimeEmploy implements Employee {
  pay() {
    console.log("full time!");
  }

  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log("Part Time!");
  }

  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
function payBad(employy: Employee): Employee {
  employy.pay();
  return employy;
}

function pay<E extends Employee>(employee: E): E {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmploy();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const popAfterPay = pay(bob);
ellieAfterPay.workFullTime();

const obj = {
  name: "ellie",
  age: 20,
};

const obj2 = {
  animal: "🐕",
};

function getValue<T, Key extends keyof T>(object: T, property: Key): T[Key] {
  return object[property];
}

console.log();
