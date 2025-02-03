// const createUser = (name, email, age) => {
//   const user = {
//     name,
//     email,
//     age,
//     userBirthYear: common.userBirthYear,
//   };

//   return user;
// };

// const common = {
//   userBirthYear() {
//     return new Date().getFullYear() - this.age;
//   },
// };

function createUser(name, email, age) {
  this.name = name;
  this.email = email;
  this.age = age;
}

createUser.prototype.userBirthYear = function () {
  return new Date().getFullYear() - this.age;
};

const user1 = new createUser("anshu", "anhu@gmail.com", 20);

const user2 = new createUser("ash", "ash@gmail.com", 23);
