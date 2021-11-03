{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // public 기본값
  // private
  // protected 상속한 자식 클래스서는 접근 가능하도록 함.
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 이걸 만드는 이유가 생성자 호출을 막기 위해서이기 때문에 생성자를 private로 둠.
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(benas: number) {
      if (benas < 0) {
        throw new Error("value for beans should be grater than 0");
      }
      this.coffeeBeans += benas;
    }

    clean() {
      console.log("cleanging the machine ... 🧹");
    }

    private grindBenas(shots: number) {
      console.log(`gtinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat() {
      console.log("heating up ... 🔥");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBenas(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CoffeeLatteMachine extends CoffeeMachine {
    constructor(benas: number, public readonly serialNumber: string) {
      super(benas);
    }
    private steamMilk() {
      console.log("Steaming some milk... 🥛");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  const machine = new CoffeeMachine(32);
  const latteMachine = new CoffeeLatteMachine(23, "SSSS");
  const coffee = latteMachine.makeCoffee(1);
  console.log(`coffee`, coffee);
}
