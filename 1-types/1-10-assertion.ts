{
  /**
   * Type Assertions 💩
   * 많이 이용하고 있다? 피할 방법을 찾으세요..
   */

  function isStrFunc(): any {
    return "hello";
  }

  const result = isStrFunc();
  // 문자열 API 사용 불가능... 이때 type assertion 사용 as
  // 문제는 만약 문자열 아니고 숫자를 반환 했다면? -> undefined 일것임...
  // 정말 정말 100% 장담할때만
  // 지금은 죽지 않았지만 app이 죽는 경우도 상당히 생길 것임.
  console.log((result as string).length);
  console.log((<string>result).length);

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  // const numbers = findNumbers()!; // 여기서 ! 사용 가능
  numbers!.push(2); // 😱 진짜 장담해 배열일거야 ! , optional과 반대되는 개념.
  // 예제
  const button = document.querySelector("class");
  // 이런 식으로 사용 보통은
  if (button) {
    button.nodeValue;
  }
}
