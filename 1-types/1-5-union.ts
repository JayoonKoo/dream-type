namespace Union {
  /**
   * Union Types: OR
   * 발생할 수 있는 케이스 중에 하나만 선택할 때
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  // Direction 에서 선언한 4가지 경우만 인자로 넘겨 줄 수 있다.
  move("right");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // fn : login -> success, fail ⏱
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  const login = (): LoginState => {
    // login logic
    return {
      response: {
        body: "logged in!",
      },
    };
  };

  // printLoginState(state)
  // sucess -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    // 좋은 방법은 아님...
    if ("response" in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
