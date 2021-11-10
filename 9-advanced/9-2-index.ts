{
  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; // string
  type Gender = Animal["gender"]; // 'male | 'female,
  type Keys = keyof Animal; // 'name' | 'age' | 'gender'

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "koo",
    gender: "male",
  };
}
