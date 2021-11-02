{
  /**
   * Enum
   * 여러가지 상수 값을 하나의 값으로 모아줌.
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WENDESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // 문자열도 가능 .. 뭐해야 할지 몰라서 하나하나 다 설정해야 함.
  type DaysOfWeek = "mon" | "tus" | "wen";
  enum Days {
    Monday = 1, // 1 로 시작하게 바꿈
    Tuesday, // 2
    Wednesday, // 3
    Thursday,
  }
  enum DaysString {
    Monday = "mon",
    Tuesday = "tue",
    Wednesday = "wen",
    Thursday = "thus",
  }
  // enum 문제점 -> 그냥 10 이런것도 받을 수 있음. 타입이 보장되지 않음 -> union 타입으로 바꾸는걸 추천
  // 모바일 클라이언트에서 사용하는 경우는 또는 모바일 클라이언트와 소통하는 경우는 union 을 모르니까 enum 필요.. 브라우저만? 그럼 union으로
  let day = Days.Tuesday;
  day = 10;
  console.log(day);
  console.log(DaysString.Wednesday);
  let dayOfWeek: DaysOfWeek = "mon";
  dayOfWeek = "wen";
}
