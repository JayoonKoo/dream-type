{
  const BEANS_GRAMM_PER_SHOT = 7;

  class Coffee {
    shots: number;
    hasMilk: boolean;
    constructor(shots: number, hasMilk: boolean) {
      this.shots = shots;
      this.hasMilk = hasMilk;
    }
  }

  class CoffeeMachine {
    private coffeeBeans: number;
    constructor() {
      this.coffeeBeans = 0;
    }

    set coffeeBenas(shot: number) {
      this.coffeeBeans += shot * BEANS_GRAMM_PER_SHOT;
    }

    makeCoffee = (shot: number): Coffee => {
      if (this.coffeeBeans < shot * BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBenas = -shot;

      return new Coffee(shot, false);
    };
  }

  const machine = new CoffeeMachine();
  let coffee: Coffee;
  try {
    coffee = machine.makeCoffee(6);
  } catch (error) {
    console.log(error);
    machine.coffeeBenas = 6;
    coffee = machine.makeCoffee(6);
  }

  console.log(coffee);
}
