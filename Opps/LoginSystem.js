class Users {
  #password;
  constructor(name) {
    this.name = name;
  }

  #validateUsername(userName) {
    return true;
  }

  #validatePassword(password) {
    return true;
  }

  signUp(userName, password) {
    let isValidated =
      this.#validatePassword(password) && this.#validateUsername(userName);

    if (isValidated) {
      this.userName = userName;
      this.#password = password;
    }
  }

  login(username, password) {
    if (username === this.userName && password === this.#password) {
      console.log("Logged In Successfully.");
    } else {
      console.log("Credentials entered are incorrect.");
    }
  }

  set password(newPassword) {
    this.#password = newPassword;
  }
  get getName() {
    return this.name;
  }
}

// let u1 = new Users("Pablo");
// u1.signUp("pablo", "password");
// u1.login("pablo", "password");

class Author extends Users {
  constructor(name) {
    super(name);
  }
}

// let author = new Author("--- Vivekanand ---");
// author.signUp("vivekananda", "password");
// author.login("vivekananda", "password");

class Admin extends Users {
  constructor(name) {
    super(name);
  }
}

let admin = new Admin("Admin");
admin.signUp("admin", "password");
admin.login("admin", "password");
admin.password = "admin123";
console.log(admin.getName);
console.log(admin);
