{
  /**
   * Type Aliases
   * 원하는 타입을 정의함.
   */
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "ellie",
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";
  type JSON = "json";
  const json: JSON = "json";
  type Boal = true;
  const isCat: Boal = true; // false 할당 시 error
  // 이걸 왜 쓰는 걸까?
}
