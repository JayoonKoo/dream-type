{
  /**
   * Type Assertions ๐ฉ
   * ๋ง์ด ์ด์ฉํ๊ณ  ์๋ค? ํผํ  ๋ฐฉ๋ฒ์ ์ฐพ์ผ์ธ์..
   */

  function isStrFunc(): any {
    return "hello";
  }

  const result = isStrFunc();
  // ๋ฌธ์์ด API ์ฌ์ฉ ๋ถ๊ฐ๋ฅ... ์ด๋ type assertion ์ฌ์ฉ as
  // ๋ฌธ์ ๋ ๋ง์ฝ ๋ฌธ์์ด ์๋๊ณ  ์ซ์๋ฅผ ๋ฐํ ํ๋ค๋ฉด? -> undefined ์ผ๊ฒ์...
  // ์ ๋ง ์ ๋ง 100% ์ฅ๋ดํ ๋๋ง
  // ์ง๊ธ์ ์ฃฝ์ง ์์์ง๋ง app์ด ์ฃฝ๋ ๊ฒฝ์ฐ๋ ์๋นํ ์๊ธธ ๊ฒ์.
  console.log((result as string).length);
  console.log((<string>result).length);

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  // const numbers = findNumbers()!; // ์ฌ๊ธฐ์ ! ์ฌ์ฉ ๊ฐ๋ฅ
  numbers!.push(2); // ๐ฑ ์ง์ง ์ฅ๋ดํด ๋ฐฐ์ด์ผ๊ฑฐ์ผ ! , optional๊ณผ ๋ฐ๋๋๋ ๊ฐ๋.
  // ์์ 
  const button = document.querySelector("class");
  // ์ด๋ฐ ์์ผ๋ก ์ฌ์ฉ ๋ณดํต์
  if (button) {
    button.nodeValue;
  }
}
