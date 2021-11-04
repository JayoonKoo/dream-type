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

  interface MilkFrother {
    makeCoffee(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // public 기본값
  // private
  // protected 상속한 자식 클래스서는 접근 가능하도록 함.
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    public constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
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
      const coffee = this.extract(shots);
      return this.milk.makeCoffee(this.sugar.addSugar(coffee));
    }
  }

  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("Steaming some milk... 🥛");
    }

    makeCoffee(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("Fancy some milk... 🥛");
    }

    makeCoffee(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMrrk implements MilkFrother {
    makeCoffee(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from candy 🍬");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  // milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const noMilk = new NoMrrk();
  // sugar
  const candySugar = new CandySugarMixer();
  const noSugar = new NoSugar();

  const swteeMachine = new CoffeeMachine(12, noMilk, candySugar);
  // 이런게 가능
  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const fancyLatteMachine = new CoffeeMachine(12, fancyMilkMaker, noSugar);
  //
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
  // 커피 머신스는 coffeemaker 를 구현하고 있으니까 이렇게 가능함.
  // const machines: CoffeeMaker[] = [
  //   new CoffeeMachine(16),
  //   new CoffeeLatteMachine(16, "1"),
  //   new SweetCoffeeMaker(16),
  //   new CoffeeMachine(16),
  //   new CoffeeLatteMachine(16, "1"),
  //   new SweetCoffeeMaker(16),
  // ];

  // machines.forEach((machines) => {
  //   console.log("--------------");
  //   machines.makeCoffee(1);
  // });
}
