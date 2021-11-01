{
  // // Javascript 💩 어떤 값을 받지? 어떤 값을 리턴하지 모르는 경우가 많음.
  // // 문자열일 경우? 엉뚱한 동작을 할 수 있음.
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript ✨
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // Javascript 💩
  // function jsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TypeScript ✨
  // function fetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // Javascript ✨ => TypeScript 가능
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("koo", "jayoon");
  // 파라미터를 옵셔널로 받고 싶을 때
  printName("koo"); // lastnName: string | undefined 라고 하면 불가능, 항상 undefined를 주어야 해서..
  printName("Anna", undefined);

  // Default parameter
  function printMessage(messge: string = "default message") {
    console.log(messge);
  }

  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => {
      return a + b;
    }, 0);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3));
}
