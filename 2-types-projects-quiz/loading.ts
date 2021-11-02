{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (state: ResourceLoadState) => {
    const { state: currentState } = state;
    switch (currentState) {
      case "fail":
        console.log("😱 no network");
        break;
      case "loading":
        console.log("👀 loading...");
        break;
      case "success":
        console.log("😃 loaded");
        break;
      default:
        return new Error("밝혀지지 않는 에러");
    }
  };

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
