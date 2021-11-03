{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // public 기본값
  // private
  // protected 상속한 자식 클래스서는 접근 가능하도록 함.
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    protected constructor(coffeeBeans: number) {
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

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(`coffee`, coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(`coffee`, coffee);
      this.machine.fillCoffeeBeans(32);
      this.machine.clean();
    }
  }

  class CoffeeWarm extends CoffeeMachine {
    constructor() {
      super(32);
    }

    warm() {
      console.log("warm Coffee...");
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const warm = new CoffeeWarm();
  warm.warm();
  const amateur = new AmateurUser(maker); // 인터페이스를 통해 사용할 수 있는 기능에 제약이 생김.
  const pro = new ProBarista(maker); // 인터페이스에 따라 사용할 수 있는 기능에 제약이 없어짐.
  amateur.makeCoffee();
  console.log();
  pro.makeCoffee();
}
