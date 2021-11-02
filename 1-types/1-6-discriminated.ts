{
  // 동일한 키와 다른 값을 가지고 있도록
  type SuccessState = {
    result: "sucess";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function printLoginState(state: LoginState) {
    // 좋은 방법은 아님...
    if (state.result === "sucess") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
