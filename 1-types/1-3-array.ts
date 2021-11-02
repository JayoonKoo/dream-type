{
  // Array
  // readonly 를 작성할때는 string[]으로 작성해야 함.
  const fruits: string[] = ["🍎", "🍌"]; // 일관성 있게 짜기 위해서 이게 더 나음
  const scores: Array<number> = [1, 2, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interace, type alias, class 같은 친구로 대체하는것이 좋을 수 있음.
  // 인덱스로 접근해야 하기 때문에... 권장하지 않음.
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  // 대표적인 예시로 React 에 useState가 있음.
  const [name, age] = student;
}
