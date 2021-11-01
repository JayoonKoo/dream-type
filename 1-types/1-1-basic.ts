{
  // JavaScript
  // old: var 더이상 사용 x 컴파일 되기 때문에
  // let
  let name = "hello";
  name = "hi";
  // const

  /**
   * JavaScript
   * Primitive: number, string, boolean, bigInt, symbol, null, undefined
   * Object: function, array ...
   */

  // number
  const num: number = 1;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined 결정 되지 않음.
  let d: undefined; // 💩
  // 옵셔널일때 이런식으로 사용함
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null 없는것으로 결정됨.
  // 이렇게 사용하진 않음.💩
  let persion: null;
  persion = null;
  let person2: string | null;

  // unknown 가능하면 사용 하지 않는것이 좋음.💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = "true";

  // any 가능하면 사용 하지 않는 것이 좋음💩.
  let anything: any = 0;
  anything = "hello";

  // void 아무것도 반환하지 않을때
  function print(): void {
    console.log("hello");
  }
  // 변수에 선언하는 경우는 극히 드뭄 undefined만 할당 가능
  let unusabel: void = undefined; // 💩

  // never 리턴할 계획이 전혀 없음을 말해주는 것과 같음. 에러나 무한루프 같은 경우
  function throwErro(message: string): never {
    // messge => server(log)
    throw new Error(message);
    // unrechabel 도달 할 수 없음
    while (true) {}
  }
  // 변수에 선언하는 경우는 없음. 💩

  // object 원시 타입 제외한 모든 object 타입 가능. 배열도 가능 💩 쓰지 않는 것이 좋음.
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
