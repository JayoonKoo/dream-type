{
  /**
   * Intersection Types: & 같은 개념
   * 다양한 타입을 하나로 묶을 수 있음.
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: "koo",
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
