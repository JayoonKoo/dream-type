{
  // // Javascript ๐ฉ ์ด๋ค ๊ฐ์ ๋ฐ์ง? ์ด๋ค ๊ฐ์ ๋ฆฌํดํ์ง ๋ชจ๋ฅด๋ ๊ฒฝ์ฐ๊ฐ ๋ง์.
  // // ๋ฌธ์์ด์ผ ๊ฒฝ์ฐ? ์๋ฑํ ๋์์ ํ  ์ ์์.
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript โจ
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // Javascript ๐ฉ
  // function jsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TypeScript โจ
  // function fetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // Javascript โจ => TypeScript ๊ฐ๋ฅ
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("koo", "jayoon");
  // ํ๋ผ๋ฏธํฐ๋ฅผ ์ต์๋๋ก ๋ฐ๊ณ  ์ถ์ ๋
  printName("koo"); // lastnName: string | undefined ๋ผ๊ณ  ํ๋ฉด ๋ถ๊ฐ๋ฅ, ํญ์ undefined๋ฅผ ์ฃผ์ด์ผ ํด์..
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
