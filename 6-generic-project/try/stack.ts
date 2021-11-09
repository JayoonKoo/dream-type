{
  interface Stack {
    push(item: string): void;
    pop(): string;
  }

  type Node = {
    next?: Node;
    prev?: Node;
    value: string;
  };

  class StackImpl implements Stack {
    private _initial: Node;
    private head: Node;
    private tail: Node;
    private length: number = 0;

    constructor(initItem: string) {
      this._initial = {
        value: initItem,
      };
      this.head = this._initial;
      this.tail = this._initial;
      this.length += 1;
    }

    private set initial(item: string) {
      this._initial = {
        value: item,
      };
      this.head = this._initial;
      this.tail = this._initial;
    }

    push(item: string) {
      // 길이가 1일때
      if (this.length === 1) {
        const node: Node = {
          prev: this.head,
          value: item,
        };
        this.head.next = node;
        this.tail = node;
      } else if (this.length === 0) {
        // 길이가 0 일때
        this.initial = item;
      } else {
        // 길이가 2 이상일 때
        const node: Node = {
          prev: this.tail,
          value: item,
        };
        this.tail.next = node;
        this.tail = node;
      }
      this.length += 1;
    }

    pop(): string {
      let popValue: string;
      if (this.length === 0) {
        throw new Error("스택 길이가 0 이면 pop 할수 없습니다..😭");
      } else if (this.length === 1) {
        popValue = this.head.value;
        this.length -= 1;
      } else if (this.length === 2) {
        popValue = this.tail.value;
        this.length -= 1;
        if (this.tail.prev) {
          popValue = this.tail.value;
          this.initial = this.tail.prev.value;
        } else {
          throw new Error("알수 없는 에러 발생 2..");
        }
      } else {
        popValue = this.tail.value;
        if (this.tail.prev) {
          // 꼬리 전 값
          this.tail = this.tail.prev;
          delete this.tail.next;
          this.length -= 1;
        } else {
          throw new Error("알수 없는 에러 발생... ");
        }
      }
      return popValue;
    }
  }

  const stack: Stack = new StackImpl("hello");
  for (let i = 0; i < 5; i++) {
    stack.push(String(i));
  }
  for (let i = 0; i < 6; i++) {
    console.log(stack.pop());
  }
  for (let i = 0; i < 5; i++) {
    stack.push(String(i));
  }
  for (let i = 0; i < 5; i++) {
    console.log(stack.pop());
  }
  console.log(stack);
}
