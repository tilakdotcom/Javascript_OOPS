class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  get customMessage() {
    return `Hello ${this.name}! Your age is ${this.age}`;
  }

  userBirthYear() {
    return new Date().getFullYear() - this.age;
  }
  set customMessage(name) {
    console.log(`name updated: ${name}`);
    this.name = name;
    
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }

  displayUserDetails() {
    return `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}, Birth Year: ${this.userBirthYear()}`;
  }
}

const user1 = new User("Anshu", "anshu@gmail.com", 20);
const user2 = new User("Ash", "ash@gmail.com", 23);

console.log(user1.customMessage);
console.log(user2.displayUserDetails());