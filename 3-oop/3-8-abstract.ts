{
  /**
   * 다양한 커피 기계가 동일한 요청 makeCoffee 를 수행함.
   * 한가지 인터페이스나 동일한 부모 클래스를 상속했을때 동일한 API를 다양하게 구성하여 호출할 수 있다.
   */
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // public 기본값
  // private
  // protected 상속한 자식 클래스서는 접근 가능하도록 함.
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 이걸 만드는 이유가 생성자 호출을 막기 위해서이기 때문에 생성자를 private로 둠.
    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

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

    protected abstract extract(shots: number): CoffeeCup;

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

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
    // makeCoffee(shots: number): CoffeeCup {
    //   const coffee = super.makeCoffee(shots);
    //   return {
    //     ...coffee,
    //     hasSugar: true,
    //   };
    // }
  }

  // 커피 머신스는 coffeemaker 를 구현하고 있으니까 이렇게 가능함.
  const machines: CoffeeMaker[] = [
    new CoffeeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
    new CoffeeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machines) => {
    console.log("--------------");
    machines.makeCoffee(1);
  });
}
