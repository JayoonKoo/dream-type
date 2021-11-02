{
  /**
   * Type Inference
   */

  let text = "hello";
  // 숫자를 넣으려고 하면 error, string으로 ts 가 추론했기 때문에
  text = "hi";
  // default 를 주면 추론 알아서 함
  function print(message = "hello") {
    console.log(message);
  }
  // 리턴 타입 추론
  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);

  // type 을 알아서 추론해서 편해 보이지만... 실제는 훨씬 복잡한 코드일 것임... 명시하는게 좋음. 워낙 간단한 원시타입인 경우는 생략해도 좋지만
}
