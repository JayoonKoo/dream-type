{
  type Feeling = "hungry" | "tired" | "full" | "happy" | "normal";

  class Cat {
    private feelling: Feeling = "normal";

    constructor() {}

    playWithPerson() {
      this.feelling = "happy";
    }

    eat() {
      this.feelling = "full";
    }
  }
}
