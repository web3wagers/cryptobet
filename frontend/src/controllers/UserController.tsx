// ConfigSingleton.js
class UserController {
  userAddress = "";
  instance = this;

  constructor() {
    return this;
  }

  getUserAddress() {
    return this.userAddress;
  }

  setUserAddress(_addr: string) {
    this.userAddress = _addr;
  }
}

const instance = new UserController();

export default instance;