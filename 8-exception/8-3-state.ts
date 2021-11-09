{
  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };

  type SuccessState = {
    result: "success";
  };

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      try {
        // some code
        return {
          result: "success",
        };
      } catch (error) {
        // 에러 종류 판단
        return {
          result: "fail",
          reason: "down",
        };
      }
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      return this.client.tryConnect();
      // login logic ...
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      const returnData = this.userService.login();
      if (returnData.result === "success") {
        // 로그인 성공
      } else {
        if (returnData.result === "fail") {
          // 로그인 실패
        }
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
