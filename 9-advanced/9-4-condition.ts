type Check<T> = T extends string ? boolean : number;
type Type = Check<string>; // boolean

// type name 문자열 반환
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

type T10 = TypeName<"a">; // 'string'
