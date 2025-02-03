class createUser {
  #age
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.#age = age;
  }

  userBirthYear() {
    return new Date().getFullYear() - this.#age;
  }
}

const user1 = new createUser("anshu", "anhu@gmail.com", 20);

const user2 = new createUser("ash", "ash@gmail.com", 23);
