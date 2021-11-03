{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public 기본값
  // private
  // protected 상속한 자식 클래스서는 접근 가능하도록 함.
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 이걸 만드는 이유가 생성자 호출을 막기 위해서이기 때문에 생성자를 private로 둠.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(benas: number) {
      if (benas < 0) {
        throw new Error("value for beans should be grater than 0");
      }
      this.coffeeBeans += benas;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("나이는 0보타 커야합니다.");
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("Steve", "jobs");
  console.log(user.fullName);
  user.age = 5;
  user.age = -2;
  console.log(user.age);
}
